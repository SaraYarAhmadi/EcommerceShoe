import express from 'express';
import {createUser,loginUserCtrl,getAllUser,getUser,deleteUser,updatedUser,handleRefreshToken,logout} from '../controller/userCtrl'
import {authMiddleware,isAdmin} from '../middlewares/authMiddleware';

const userRouter = express.Router();

userRouter.post("/register",createUser)
userRouter.post("/login",loginUserCtrl)
userRouter.get("/all-users",getAllUser)
userRouter.get("/refresh",handleRefreshToken)
userRouter.get("/logout",logout)
userRouter.get("/:id",authMiddleware,isAdmin,getUser)
userRouter.delete("/:id",deleteUser)
userRouter.put("/edit-user",authMiddleware,updatedUser)


// Save/Post New user




export default userRouter;

