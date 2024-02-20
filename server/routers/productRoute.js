import express from 'express';
import { createProduct, getaProduct, getAllProduct, deleteProduct, updateProduct, uploadImages } from '../controller/producrCtrl';
import { isAdmin, authMiddleware } from '../middlewares/authMiddleware';
import { uploadPhoto } from "../middlewares/uploadImage.js"
const productRoute = express.Router();

// Save/Post New Products
productRoute.post("/", authMiddleware, isAdmin, createProduct)
productRoute.get("/:id", getaProduct)
productRoute.put("/:id", authMiddleware, isAdmin, updateProduct)
productRoute.put(
    "/upload/:id",
    uploadPhoto.array("images", 10),
    uploadImages
);

productRoute.delete("/:id", deleteProduct)
productRoute.get("/", getAllProduct)
export default productRoute
