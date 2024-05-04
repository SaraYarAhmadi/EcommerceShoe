import express from 'express';
import { createUser, loginUserCtrl, getAllUser, getUser, deleteUser, updatedUser, handleRefreshToken, logout, saveAddress, userCart, getUserCart, emptyCart, applyCoupon, createOrder, getOrders, updateOrderStatus, updateCartItem } from '../controller/userCtrl'
import { authMiddleware, isAdmin } from '../middlewares/authMiddleware';

const userRouter = express.Router();

userRouter.post("/register", createUser)
userRouter.post("/login", loginUserCtrl)
userRouter.post("/cart", authMiddleware, userCart);
userRouter.post("/cart/applycoupon", authMiddleware, applyCoupon);
userRouter.post("/cart/cash-order", authMiddleware, createOrder);
userRouter.get("/all-users", getAllUser)
userRouter.get("/get-orders", authMiddleware, getOrders);

userRouter.get("/refresh", handleRefreshToken)
userRouter.put("/cart/update-product", authMiddleware, updateCartItem);
userRouter.get("/cart", authMiddleware, getUserCart);
userRouter.get("/logout", logout)
userRouter.get("/:id", getUser)
userRouter.delete("/empty-cart", authMiddleware, emptyCart);
userRouter.delete("/:id", deleteUser)
userRouter.put("/edit-user", authMiddleware, updatedUser)
userRouter.put("/save-address", authMiddleware, saveAddress);

userRouter.put(
    "/order/update-order/:id",
    authMiddleware,
    isAdmin,
    updateOrderStatus
);

// Save/Post New user


export default userRouter;
