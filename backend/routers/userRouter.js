import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import userModel from '../model/userModel';
import registerValidator from '../validators/register';
import authenticatedMiddleware from '../middlewares/authenticated';
require('dotenv').config()
// import courseUserModel from '../model/courseUserModel';

const userRouter = express.Router();

userRouter.post('/register', async (req, res) => {
    console.log(req.body);

    const validationResult = registerValidator(req.body);
    if (validationResult !== true) {
        return res.status(422).json(validationResult);
    }

    const { username, email, password, phone } = req.body;

    const isUserExists = await userModel.findOne({
        $or: [{ username }, { email }],
    });

    if (isUserExists) {
        return res.status(409).json({
            message: 'Username or email is duplicate',
        });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUserModel = {
        username,
        phone,
        email,
        password: hashedPassword,
    };

    const newUser = new userModel(newUserModel);

    const userObject = newUser.toObject();
    delete userObject.password;

    const accessToken = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
        expiresIn: '1 day',
    });

    await newUser.save()
        .then(() => res.status(201).json({ newUser: userObject, accessToken }));
});


userRouter.post('/login', async (req, res) => {
    const { identifier, password } = req.body;

    const user = await userModel.findOne({
        $or: [{ email: identifier }, { username: identifier }],
    });

    if (!user) {
        return res.status(401).json('There is no user with this email or username.');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return res.status(401).json({ message: 'Password is not correct.' });
    }

    const accessToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '1 day',
    });

    return res.json({ accessToken });
});


userRouter.get('/me', authenticatedMiddleware, async (req, res) => {
    const userCourses = await courseUserModel
        .find({ user: req.user._id })
        .populate('course');

    const courses = userCourses.map(userCourse => userCourse.course);

    return res.json({ user: req.user, courses });
});

export default userRouter;
