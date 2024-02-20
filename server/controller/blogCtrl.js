import blogModel from '../model/blogModel';
import userModel from '../model/userModel';
import validateMongoDbId from '../utils/validateMongodbId';
import asyncHandler from "express-async-handler";
import fs from "fs";

const createBlog = asyncHandler(async (req, res) => {
  try {
    const createBlog = await blogModel.create(req.body)
    res.json(createBlog)
  } catch (error) {
    throw new Error(error)
  }
})

const updateBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updateBlog = await blogModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updateBlog);
  } catch (error) {
    throw new Error(error);
  }
});


const getBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getBlog = await blogModel.findById(id);
    const updateViews = await blogModel.findByIdAndUpdate(
      id,
      {
        $inc: { numViews: 1 },
      },
      { new: true }
    );
    res.json(getBlog);
  } catch (error) {
    throw new Error(error);
  }
});



const getAllBlogs = asyncHandler(async (req, res) => {
  try {
    const getBlogs = await blogModel.find();
    res.json(getBlogs);
  } catch (error) {
    throw new Error(error);
  }
});

const deleteBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletedBlog = await blogModel.findByIdAndDelete(id);
    res.json(deletedBlog);
  } catch (error) {
    throw new Error(error);
  }
});



const uploadImages = async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const urls = [];
    const files = req.files;
    console.log("files", files);

    for (const file of files) {
      const { path } = file;
      const newPath = `/images/blogs/${file.filename}`;
      // fs.renameSync(path, `./public${newPath}`); // جابجایی فایل به مسیر جدید
      // console.log("newPath", newPath);
      urls.push(newPath);
    }

    const findBlog = await blogModel.findByIdAndUpdate(
      id,
      {
        images: urls.map((file) => {
          return file;
        }),
      },
      {
        new: true,
      }
    );

    res.json(findBlog);
  } catch (error) {
    throw new Error(error);
  }
};


export { createBlog, updateBlog, getBlog, getAllBlogs, deleteBlog, uploadImages }
