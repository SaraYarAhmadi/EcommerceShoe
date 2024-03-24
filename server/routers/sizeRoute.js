import express from "express";
import { authMiddleware, isAdmin } from "../middlewares/authMiddleware.js";
import { createSize, getSize, getallSize } from "../controller/sizeCtrl.js";

const sizeRoute = express.Router();

sizeRoute.post("/", authMiddleware, isAdmin, createSize);
sizeRoute.get("/", getallSize);
sizeRoute.get("/:id", getSize);

export default sizeRoute;
