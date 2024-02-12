import userModel from "../model/userModel";
import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";

const authMiddleware = asyncHandler(async (req, res, next) => {
    let token;
    if (req?.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];
        try {
            if (token) {
                const decoded = jwt.verify(token, process.env.JWT_SECRET);
                const userInfo = await userModel.findById(decoded?.id);
                req.user = userInfo;
                next();
            }
        } catch (error) {
            throw new Error("not authorized token expired");
        }
    } else {
        throw new Error("There is no token attached to Header");
    }
});

const isAdmin = asyncHandler(async (req, res, next) => {
    const { email } = req.user;
    const adminUser = await userModel.findOne({ email })
    if (adminUser.role !== "admin") {
        throw new Error("you are not admin");
    } else {
        next();
    }
});

export { authMiddleware, isAdmin };
