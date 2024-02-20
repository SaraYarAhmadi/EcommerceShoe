import express from "express";
import { createBlog, updateBlog, getBlog, getAllBlogs, deleteBlog, uploadImages } from "../controller/blogCtrl";
import { uploadPhoto, blogImgResize } from "../middlewares/uploadImage.js"
import { authMiddleware, isAdmin } from '../middlewares/authMiddleware';

const blogRouter = express.Router();


blogRouter.post("/", authMiddleware, isAdmin, createBlog)
blogRouter.put("/:id", authMiddleware, isAdmin, updateBlog)
blogRouter.get("/:id", getBlog);
blogRouter.get("/", getAllBlogs);
blogRouter.delete("/:id", authMiddleware, isAdmin, deleteBlog);
blogRouter.put(
    "/upload/:id",
    uploadPhoto.array("images", 2),
    blogImgResize,
    uploadImages
);



export default blogRouter