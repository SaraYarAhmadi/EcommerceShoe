import userModel from "../model/userModel";
import asyncHandler from "express-async-handler"
import generateToken from "../cofig/jwtToken"
import validateMongoDbId from "../utils/validateMongodbId";
import generateRefreshToken from "../cofig/refreshtoken";
import jwt from "jsonwebtoken";



const createUser = asyncHandler(async (req, res) => {
    const email = req.body.email;
    const findUser = await userModel.findOne({ email: email })

    if (!findUser) {
        //creatUser
        const newUser = await userModel.create(req.body)
        res.json(newUser);
    } else {
        throw new Error("User Already Exists")
    }
})


//login User 

const loginUserCtrl = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const findUser = await userModel.findOne({ email })
    // console.log(findUser);
    if (findUser && (await findUser.isPasswordMatched(password))) {
        const refreshToken = generateRefreshToken(findUser?._id);
        const updateuser = await userModel.findByIdAndUpdate(
          findUser._id,
          {
            refreshToken: refreshToken,
          },
          { new: true }
        );
        res.cookie("refreshToken", refreshToken, {
          httpOnly: true,
          maxAge: 72 * 60 * 60 * 1000,
        });
        

        res.json({
            _id: findUser?._id,
            firstName: findUser?.firstName,
            lastName: findUser?.lastName,
            email: findUser?.email,
            mobile: findUser?.mobile,
            token: generateToken(findUser?._id),
        });
    } else {
        throw new Error("invalid user")
    }
})



// Get all users
const getAllUser = asyncHandler(async (req, res) => {
    try {
        const getUsers = await userModel.find();
        res.json(getUsers);
    } catch (error) {
        throw new Error(error.message);
    }
});

// Get a single user


const getUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id)

    try {
        const user = await userModel.findById(id);
        console.log('testSorousfffffffffffffffffffffffffffh', user);
        res.json({
            user,
          });

    } catch (error) {
        throw new Error(error.message);
    }
})
// delete a single user

const deleteUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id)
    try {
        const getUser = await userModel.findByIdAndDelete(id);
        res.json(getUser)

    } catch (error) {
        throw new Error(error.message);
    }
})

// update a user


const updatedUser = asyncHandler(async (req, res) => {
    const { id } = req.user;
    validateMongoDbId(id)
    try {
        const updatedUser = await userModel.findByIdAndUpdate(
            id,
            {
                firstName: req?.body.firstName,
                lastName: req?.body.lastName,
                email: req?.body.email,
                mobile: req?.body.mobile,
            },
            {
                new: true,
            }
        );
        res.json(updatedUser)

    } catch (error) {
        throw new Error(error.message);
    }
})

// handle refresh token

const handleRefreshToken = asyncHandler(async (req, res) => {
    const cookie = req.cookies;
    if (!cookie?.refreshToken) throw new Error("No Refresh Token in Cookies");
    const refreshToken = cookie.refreshToken;
    const user = await userModel.findOne({ refreshToken });
    if (!user) throw new Error(" No Refresh token present in db or not matched");
    jwt.verify(refreshToken, process.env.JWT_SECRET, (err, decoded) => {
      if (user.id !== decoded.id) {
        throw new Error("There is something wrong with refresh token");
      }
      const accessToken = generateToken(user?._id);
      res.json({ accessToken });
    });
  });
  

  // logout functionality

const logout = asyncHandler(async (req, res) => {
    const cookie = req.cookies;
    if (!cookie?.refreshToken) throw new Error("No Refresh Token in Cookies");
    const refreshToken = cookie.refreshToken;
    const user = await userModel.findOne({ refreshToken });
    if (!user) {
      res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: true,
      });
      return res.sendStatus(204); // forbidden
    }
    await userModel.findOneAndUpdate({refreshToken}, {
      refreshToken: "",
    });
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: true,
    });
    res.sendStatus(204); // forbidden
  });
  

export { createUser, loginUserCtrl, getAllUser, getUser, deleteUser, updatedUser,handleRefreshToken,logout }