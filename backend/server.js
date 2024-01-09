import express from "express";
import cors from "cors";
import productRouter from "./routers/productRouter";
import userRouter from "./routers/userRouter";
import mongoose from 'mongoose'

mongoose.connect("mongodb+srv://sarayarahmadi69:Sara1@eccomersshoes.ogdz3dc.mongodb.net/Shoes");

mongoose.connection.once("open", () => {
    console.log("mongoose connections is successful");
});

const app = express();
app.use(cors({ origin: true, Credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// hatman 
app.use("/products", productRouter)
app.use("/users", userRouter)



app.listen(4500, () => {
    console.log("your app is listen on port 4500");
})

