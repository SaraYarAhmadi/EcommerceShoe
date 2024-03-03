import couponModel from "../model/couponModel";
import asyncHandler from "express-async-handler";
import validateMongoDbId from "../utils/validateMongodbId";

const createCoupon = asyncHandler(async (req, res) => {

    try {
        const newCoupon = await couponModel.create(req.body);
        res.json(newCoupon);
    } catch (error) {
        throw new Error(error);
    }
});

const getAllCoupons = asyncHandler(async (req, res) => {
    try {
        const coupons = await couponModel.find();
        res.json(coupons);
    } catch (error) {
        throw new Error(error);
    }
});
const updateCoupon = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const updatecoupon = await couponModel.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.json(updatecoupon);
    } catch (error) {
        throw new Error(error);
    }
});
const deleteCoupon = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const deletecoupon = await couponModel.findByIdAndDelete(id);
        res.json(deletecoupon);
    } catch (error) {
        throw new Error(error);
    }
});
const getCoupon = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const getAcoupon = await couponModel.findById(id);
        res.json(getAcoupon);
    } catch (error) {
        throw new Error(error);
    }
});
export { createCoupon, getAllCoupons, updateCoupon, deleteCoupon, getCoupon, }

