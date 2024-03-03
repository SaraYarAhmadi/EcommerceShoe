import mongoose from 'mongoose'

const productSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        slug: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
        sold: {
            type: Number,
            default: 0,
        },
        images: [],
        color: [],
        category: {
            type: String,
            require: true,
        },
        size: [],
        gender: {
            type: Number,
            // enum: ['زنانه', 'مردانه'],
            required: true,
        },
        totalrating: {
            type: String,
            default: 0,
        },
    },
    { timestamps: true }
);




const Product = mongoose.model("Product", productSchema)

export default Product;
// export default productsModel;


