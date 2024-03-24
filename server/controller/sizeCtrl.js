import asyncHandler from "express-async-handler";
import validateMongoDbId from "../utils/validateMongodbId";
import Size from "../model/sizeModel";

const createSize = asyncHandler(async (req, res) => {
    try {
        const newBrand = await Size.create(req.body);
        res.json(newBrand);
    } catch (error) {
        throw new Error(error);
    }
});

const getSize = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const getaBrand = await Size.findById(id);
        res.json(getaBrand);
    } catch (error) {
        throw new Error(error);
    }
});

const getallSize = asyncHandler(async (req, res) => {
    try {
        const getallBrand = await Size.find();
        res.json(getallBrand);
    } catch (error) {
        throw new Error(error);
    }
});
export {createSize,getSize,getallSize}

