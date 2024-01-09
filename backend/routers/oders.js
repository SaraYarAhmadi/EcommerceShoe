// Save/Post New Users
userRouter.post("/addUser", async (req, res) => {
    console.log(req.body);
    const { username, email ,password ,phone} = req.body;
    const newUserModel = {
        username,
        phone,
        email,
        password,
    };

    const newUser = new userModel(newUserModel);

    await newUser.save()
    .then(() => res.send('Save Is Ok'))
})








// import express from 'express';
// import userModel from '../model/userModel'


// const userRouter = express.Router();



// //get all Users

// userRouter.get("/getAllUser", async (req, res) => {
//     const allUser = await userModel.find({})
//     console.log(allUser);
//     res.send(allUser)
// })

// // Get User By id
// userRouter.get("/getUser/:id", async (req, res) => {
//     const id = req.params.id;
//     console.log(id);
//     const user = await userModel.findById(id);
//     console.log(user);

//     res.send(user);
// })

// // Save/Post New Users
// userRouter.post("/addUser", async (req, res) => {
//     console.log(req.body);
//     const { username, email ,password ,phone} = req.body;
//     const newUserModel = {
//         username,
//         phone,
//         email,
//         password,
//     };

//     const newUser = new userModel(newUserModel);

//     await newUser.save()
//     .then(() => res.send('Save Is Ok'))
// })


// export default userRouter
