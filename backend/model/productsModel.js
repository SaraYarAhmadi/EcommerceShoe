import mongoose from 'mongoose'

const productShema = new mongoose.Schema(
  {
    title: String,
    description: String,
    image: String,
  },
  // { timestamps: true }
);

productShema.virtual("sessions", {
  ref: "Session",
  localField: "_id",
  foreignField: "products",
});


const productsModel = mongoose.model('products', productShema)

export default productsModel;

