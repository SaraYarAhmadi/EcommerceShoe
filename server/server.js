import express from "express";
import cors from "cors";
import dbConnect from "./cofig/dbConnect"
import userRouter from "./routers/authRoute";
import productRoute from "./routers/productRoute";
import blogRouter from "./routers/blogRoute";
import categoryRoute from "./routers/categoryRoute";
import 'dotenv/config';
import { errorHandler, notFound } from "./middlewares/errorHandler";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import couponRouter from "./routers/couponRoute"


const PORT = process.env.PORT || 4000;
dbConnect();
const app = express();
app.use(morgan("dev"))
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/user", userRouter);
app.use("/api/products", productRoute);
app.use("/api/blog", blogRouter);
app.use("/api/category", categoryRoute);
app.use("/api/coupon", couponRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Your app is listening on port ${PORT}`);
});

