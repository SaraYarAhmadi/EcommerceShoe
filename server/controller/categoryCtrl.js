import categoryModel from "../model/categoryModel";
import asyncHandler from "express-async-handler";
import validateMongoDbId from "../utils/validateMongodbId";



const createCategory= asyncHandler(async(req, res)=>{
    try {
        const createCategory= await categoryModel.create(req.body)
        res.json(createCategory)
    } catch (error) {
        throw new Error(error)
        
    }
})



const updateCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
      const updatedCategory = await categoryModel.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.json(updatedCategory);
    } catch (error) {
      throw new Error(error);
    }
  });
  
  
  
  const deleteCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
      const deletedCategory = await categoryModel.findByIdAndDelete(id);
      res.json(deletedCategory);
    } catch (error) {
      throw new Error(error);
    }
  });
  const getCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
      const getaCategory = await categoryModel.findById(id);
      res.json(getaCategory);
    } catch (error) {
      throw new Error(error);
    }
  });
  const getAllCategory = asyncHandler(async (req, res) => {
    try {
      const getallCategory = await categoryModel.find();
      res.json(getallCategory);
    } catch (error) {
      throw new Error(error);
    }
  });

export {createCategory,updateCategory,deleteCategory,getCategory,getAllCategory}