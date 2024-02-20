import mongoose from 'mongoose'

const productShema = new mongoose.Schema(
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
        ratings: {
            star: Number,
            postedby: { type: mongoose.Types.ObjectId, ref: "User" }
        },
        color: {
            type: String,
            require: true,
        },
        categoryID: {
            type: String,
            require: true,
        },
        size: {
            type: String,
            required: true,
            // enum: ['38', '39', '40', '41', '42', '43', '44'],
        },
        gender: {
            type: String,
            // enum: ['زنانه', 'مردانه'],
            required: true,
        },
    },
    { timestamps: true }
);

const productsModel = mongoose.model('products', productShema)

export default productsModel;


