import mongoose from 'mongoose'

// Declare the Schema of the Mongo model
var sizeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);


const Size = mongoose.model("Size",sizeSchema)

export default Size;

