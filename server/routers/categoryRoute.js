import express from "express";
import {createCategory,updateCategory,deleteCategory,getCategory,getAllCategory} from "../controller/categoryCtrl";
import{authMiddleware,isAdmin} from "../middlewares/authMiddleware"
const categoryRoute= express.Router();


categoryRoute.post("/", authMiddleware, isAdmin, createCategory);
categoryRoute.put("/:id", authMiddleware, isAdmin, updateCategory);
categoryRoute.delete("/:id", authMiddleware, isAdmin, deleteCategory);
categoryRoute.get("/:id", getCategory);
categoryRoute.get("/", getAllCategory);


export default categoryRoute