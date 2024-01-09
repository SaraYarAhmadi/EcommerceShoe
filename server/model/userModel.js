import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    username:  String,
    phone: String,
    email:String,
    password: String,
  },
);
const userModel = mongoose.model('User', userSchema);
export default userModel;

