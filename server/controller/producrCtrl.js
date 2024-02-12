
import productsModel from "../model/productsModel";
import asyncHandler from "express-async-handler";
import slugify from "slugify";


const createProduct = asyncHandler(async (req, res) => {
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title);
        }
        const newProduct = await productsModel.create(req.body);
        console.log("newProduct:", newProduct);
        res.json(newProduct);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ status: "error", message: "Internal server error" });
    }
});

const updateProduct = asyncHandler(async (req, res) => {
    const id = req.params.id; // استفاده از req.params.id برای دسترسی به پارامتر id در URL
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title);
        }

        const updatedProduct = await productsModel.findByIdAndUpdate(id, req.body, { new: true });
        res.json(updatedProduct);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ status: "error", message: "Internal server error" });
    }
});


const deleteProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;
    console.log(id);
    try {
        const deleteProduct = await productsModel.findByIdAndDelete(id)
        res.json(deleteProduct)
    } catch (error) {
        throw new Error(error.massage);
    }
})

const getaProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const findProduct = await productsModel.findById(id);
        res.json(findProduct);
    } catch (error) {
        throw new Error(error.massage);
    }
});

const getAllProduct = asyncHandler(async (req, res) => {
    try {

        // Filtering
        const queryObj = { ...req.query };
        const excludeFields = ["page", "sort", "limit", "fields"];
        excludeFields.forEach((el) => delete queryObj[el]);
        let queryStr = JSON.stringify(queryObj);

        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

        let query = productsModel.find(JSON.parse(queryStr));
        // Sorting

        if (req.query.sort) {

            const sortBy = req.query.sort.split(",").join(" ");
            query = query.sort(sortBy);
        } else {
            query = query.sort("-createdAt");
        }


        // limiting the fields

        if (req.query.fields) {
            const fields = req.query.fields.split(",").join(" ");
            query = query.select(fields);
        } else {
            query = query.select("-__v");
        }

        // pagination

        const page = req.query.page;
        const limit = req.query.limit;
        const skip = (page - 1) * limit;
        query = query.skip(skip).limit(limit);
        if (req.query.page) {
            const productCount = await productsModel.countDocuments();
            if (skip >= productCount) throw new Error("This Page does not exists");
        }

        const getAllProducts = await query;
        res.json(getAllProducts);
    } catch (error) {
        throw new Error(error.message);
    }
});


export { createProduct, getaProduct, getAllProduct, deleteProduct, updateProduct }