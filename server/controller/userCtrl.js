import userModel from "../model/userModel";
import Product from "../model/productsModel";
import asyncHandler from "express-async-handler"
import generateToken from "../cofig/jwtToken"
import validateMongoDbId from "../utils/validateMongodbId";
import generateRefreshToken from "../cofig/refreshtoken";
import jwt from "jsonwebtoken";
import cartModel from "../model/cartModel";
import orderModel from "../model/orderModel";
import couponModel from "../model/couponModel";
import uniqid from 'uniqid';


const createUser = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const findUser = await userModel.findOne({ email });

  if (!findUser) {
    // ایجاد کاربر جدید
    const newUser = await userModel.create(req.body);
    // ایجاد توکن برای کاربر
    const token = generateToken(newUser._id);

    res.cookie("refreshToken", token, {
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000,
    });

    const userResponse = newUser.toObject(); // تبدیل مدل مانگوس به یک شیء جاوااسکریپت ساده
    delete userResponse.password; // حذف فیلد رمز عبور از پاسخ

    userResponse.token = token; // افزودن توکن به شیء کاربر

    res.json(userResponse);
  } else {
    throw new Error("کاربر قبلاً وجود دارد");
  }
});

//login User 

const loginUserCtrl = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const findUser = await userModel.findOne({ email });

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

    const findCart = await cartModel.findOne({ orderby: findUser._id });
    let cart = [];
    let cartTotal = 0;
    if (findCart) {
      cart = findCart.products;
      cartTotal = findCart.cartTotal;
    }

    const response = {
      userName: findUser?.userName,
      email: findUser?.email,
      phone: findUser?.phone,
      role: findUser?.role,
      cart: cart,
      cartTotal: cartTotal,
      _id: findUser?._id,
      createdAt: findUser?.createdAt,
      updatedAt: findUser?.updatedAt,
      __v: findUser?.__v,
      token: generateToken(findUser?._id),
    };
    res.json(response);
  } else {
    throw new Error("کاربر نامعتبر است");
  }
});



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
        userName: req?.body.userName,
        email: req?.body.email,
        phone: req?.body.phone,
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
  await userModel.findOneAndUpdate({ refreshToken }, {
    refreshToken: "",
  });
  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: true,
  });
  res.sendStatus(204); // forbidden
});

// save user Address

const saveAddress = asyncHandler(async (req, res, next) => {
  console.log("req.pralllllllllllllll", req.user);
  const { _id } = req.user;
  validateMongoDbId(_id);

  try {
    const updatedUser = await userModel.findByIdAndUpdate(
      _id,
      {
        address: req?.body?.address,
      },
      {
        new: true,
      }
    );
    res.json(updatedUser);
  } catch (error) {
    throw new Error(error);
  }
});


const userCart = asyncHandler(async (req, res) => {
  const { cart } = req.body;
  const { _id } = req.user;
  validateMongoDbId(_id);
  try {
    let products = [];
    const user = await userModel.findById(_id);
    let existingCart = await cartModel.findOne({ orderby: user._id });

    if (existingCart) {
      // اگر سبد خرید قبلی وجود داشت، محصولات جدید را به آن اضافه کنید
      products = existingCart.products;

      for (let i = 0; i < cart.length; i++) {
        const existingProductIndex = products.findIndex(
          (item) => item.product.toString() === cart[i]._id.toString()
        );

        if (existingProductIndex !== -1) {
          // اگر محصول قبلاً در سبد خرید وجود داشت، تعداد آن را به‌روزرسانی کنید
          products[existingProductIndex].count += cart[i].count;
        } else {
          // در غیر این صورت، محصول را به لیست اضافه کنید
          let object = {};
          object.product = cart[i]._id;
          object.count = cart[i].count;
          object.color = cart[i].color;
          object.size = cart[i].size;
          let getPrice = await Product.findById(cart[i]._id).select("price").exec();
          object.price = getPrice.price;
          products.push(object);
        }
      }



      let cartTotal = 0;
      for (let i = 0; i < products.length; i++) {
        cartTotal = cartTotal + products[i].price * products[i].count;
      }

      existingCart.products = products;
      existingCart.cartTotal = cartTotal;
      await existingCart.save();
      res.json({ ...existingCart.toObject(), products: existingCart.products, cart: existingCart.toObject() });
    } else {
      // در غیر این صورت، سبد خرید جدید ایجاد کنید و محصولات را اضافه کنید
      let newProducts = [];
      let cartTotal = 0;

      for (let i = 0; i < cart.length; i++) {
        let object = {};
        object.product = cart[i]._id;
        object.count = cart[i].count;
        object.color = cart[i].color;
        object.size = cart[i].size;
        let getPrice = await Product.findById(cart[i]._id).select("price").exec();
        object.price = getPrice.price;
        newProducts.push(object);
        cartTotal = cartTotal + object.price * object.count;
      }

      let newCart = await new cartModel({
        products: newProducts,
        cartTotal,
        orderby: user._id,
      }).save();
      res.json({ ...newCart.toObject(), products: newCart.products, cart: newCart.toObject() });
    }
  } catch (error) {
    throw new Error(error);
  }
});


const updateCartItem = asyncHandler(async (req, res) => {
  const { productId, quantity } = req.body;
  const { _id } = req.user;
  // console.log("productId => ", productId);
  validateMongoDbId(_id);
  validateMongoDbId(productId);

  try {
    const user = await userModel.findById(_id);
    const existingCart = await cartModel.findOne({ orderby: user._id });
    // console.log("user => ", user);
    console.log("existingCartBefore => ", existingCart);

    if (!existingCart) {
      throw new Error("سبد خرید پیدا نشد.");
    }

    const { products } = existingCart;
    const existingProduct = products.find((product) => product._id.toString() === productId);

    if (!existingProduct) {
      throw new Error("محصول مورد نظر در سبد خرید یافت نشد.");
    }

    if (quantity === 0) {
      // تعداد صفر است، محصول را از سبد خرید حذف کنید
      existingCart.products = products.filter((product) => product._id.toString() !== productId);
    } else {
      // تعداد غیر صفر است، تعداد محصول را به روز کنید
      existingCart.products = products.map(item => (item._id.toString() === productId) ? { ...item, count: quantity } : item)
      // existingProduct.count = quantity;
    }

    console.log("existingCartAfteeeerr => ", existingCart);
    // محاسبه مجموع قیمت سبد خرید پس از تغییرات
    let cartTotal = 0;
    for (let i = 0; i < existingCart.products.length; i++) {
      const product = existingCart.products[i];
      const getPrice = await Product.findById(product.product).select("price").exec();
      product.price = getPrice.price;
      cartTotal += product.price * product.count;
    }

    existingCart.cartTotal = cartTotal;
    await existingCart.save();

    res.json(existingCart);
  } catch (error) {
    throw new Error(error);
  }
});


const getUserCart = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  validateMongoDbId(_id);

  try {
    const cart = await cartModel.findOne({ orderby: _id }).populate(
      "products.product"
    );
    res.json(cart);
  } catch (error) {
    throw new Error(error);
  }
});

const emptyCart = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  validateMongoDbId(_id);

  try {
    const user = await userModel.findOne({ _id });
    const cart = await cartModel.findOneAndDelete({ orderby: user._id });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    res.json(cart);
  } catch (error) {
    throw new Error(error);
  }
});




const applyCoupon = asyncHandler(async (req, res) => {
  const { coupon } = req.body;
  const { _id } = req.user;
  validateMongoDbId(_id);

  const validCoupon = await couponModel.findOne({ name: coupon });
  if (validCoupon === null) {
    throw new Error("Invalid Coupon");
  }
  const user = await userModel.findOne({ _id });
  let { cartTotal } = await cartModel.findOne({
    orderby: user._id,
  }).populate("products.product");
  let totalAfterDiscount = (cartTotal - (cartTotal * validCoupon.discount) / 100).toFixed(2);
  await cartModel.findOneAndUpdate(
    { orderby: user._id },
    { totalAfterDiscount },
    { new: true }
  );
  res.json(totalAfterDiscount);
});

const createOrder = asyncHandler(async (req, res) => {
  const { COD, couponApplied } = req.body;
  const { _id } = req.user;
  validateMongoDbId(_id);
  try {
    if (!COD) throw new Error("Create cash order failed");
    const user = await userModel.findById(_id);
    let userCart = await cartModel.findOne({ orderby: user._id });
    let finalAmout = 0;
    if (couponApplied && userCart.totalAfterDiscount) {
      finalAmout = userCart.totalAfterDiscount;
    } else {
      finalAmout = userCart.cartTotal;
    }

    let newOrder = await new orderModel({
      products: userCart.products,
      paymentIntent: {
        id: uniqid(),
        method: "COD",
        amount: finalAmout,
        status: "Cash on Delivery",
        created: Date.now(),
        currency: "usd",
      },
      orderby: user._id,
      orderStatus: "Cash on Delivery",
    }).save();
    let update = userCart.products.map((item) => {
      return {
        updateOne: {
          filter: { _id: item.product._id },
          update: { $inc: { quantity: -item.count, sold: +item.count } },
        },
      };
    });
    const updated = await Product.bulkWrite(update, {});
    res.json({ message: "success" });
  } catch (error) {
    throw new Error(error);
  }
});




const getOrders = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  validateMongoDbId(_id);
  try {
    const userorders = await orderModel.findOne({ orderby: _id })
      .populate("products.product")
      .populate("orderby")
      .exec();
    res.json(userorders);
  } catch (error) {
    throw new Error(error);
  }
});


const updateOrderStatus = asyncHandler(async (req, res) => {
  const { status } = req.body;
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updateOrderStatus = await orderModel.findByIdAndUpdate(
      id,
      {
        orderStatus: status,
        paymentIntent: {
          status: status,
        },
      },
      { new: true }
    );
    res.json(updateOrderStatus);
  } catch (error) {
    throw new Error(error);
  }
});

export { createUser, loginUserCtrl, getAllUser, getUser, deleteUser, updatedUser, handleRefreshToken, logout, saveAddress, userCart, getUserCart, emptyCart, applyCoupon, createOrder, getOrders, updateOrderStatus, updateCartItem }