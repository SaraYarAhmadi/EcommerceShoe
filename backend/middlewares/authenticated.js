import jwt from 'jsonwebtoken';
import userModel from '../model/userModel';

const authenticate = async (req, res, next) => {
  const authorizationHeader = req.header('Authorization')?.split(' ');

  if (authorizationHeader?.length !== 2) {
    return res.status(403).json({
      message: "This route is protected and you don't have access to it.",
    });
  }
  const token = authorizationHeader[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await userModel.findById(decoded.id).lean();
    delete user.password;

    req.user = user;

    next();
  } catch (error) {
    console.error({ errorOnValidatingJWT: error });
  }
};

export default authenticate;