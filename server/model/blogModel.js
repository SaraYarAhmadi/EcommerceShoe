import mongoose from "mongoose";

// Declare the Schema of the Mongo model
var blogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        images: [],
    },
    {

        timestamps: true,
    }
);



//Export the model
const blogModel = mongoose.model('Blog', blogSchema)

export default blogModel;
