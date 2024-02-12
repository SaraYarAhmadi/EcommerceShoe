import express from 'express';
import { createProduct, getaProduct, getAllProduct, deleteProduct, updateProduct } from '../controller/producrCtrl';
import { isAdmin, authMiddleware } from '../middlewares/authMiddleware';
const productRoute = express.Router();



// Save/Post New Products
productRoute.post("/", createProduct)
productRoute.get("/:id", getaProduct)
productRoute.put("/:id", updateProduct)
productRoute.delete("/:id", deleteProduct)
productRoute.get("/", getAllProduct)


export default productRoute