import express from "express";
import {createCoupon,getAllCoupons,updateCoupon,deleteCoupon} from "../controller/couponCtrl"
import{authMiddleware,isAdmin} from "../middlewares/authMiddleware";
const couponRouter = express.Router();

couponRouter.post("/", authMiddleware, isAdmin, createCoupon);
couponRouter.get("/", authMiddleware, isAdmin, getAllCoupons);
couponRouter.get("/:id", authMiddleware, isAdmin, getAllCoupons);
couponRouter.put("/:id", authMiddleware, isAdmin, updateCoupon);
couponRouter.delete("/:id", authMiddleware, isAdmin, deleteCoupon);

export default couponRouter;
