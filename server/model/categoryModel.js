import mongoose from 'mongoose'

const categoryschema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
  }
);

const categoryModel = mongoose.model("Category", categoryschema);

export default categoryModel
