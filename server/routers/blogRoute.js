import express from "express";
import { createBlog, updateBlog, getBlog, getAllBlogs, deleteBlog, uploadImages } from "../controller/blogCtrl";
import { uploadBlogImage } from "../middlewares/uploadImageBlog"
import { authMiddleware, isAdmin } from '../middlewares/authMiddleware';

const blogRouter = express.Router();


blogRouter.post("/", authMiddleware, isAdmin, createBlog)
blogRouter.put("/:id", authMiddleware, isAdmin, updateBlog)
blogRouter.get("/:id", getBlog);
blogRouter.get("/", getAllBlogs);
blogRouter.delete("/:id", authMiddleware, isAdmin, deleteBlog);
blogRouter.put(
    "/upload/:id",
    uploadBlogImage.array("images", 2),
    uploadImages
);


export default blogRouter