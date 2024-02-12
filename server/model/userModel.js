import mongoose from 'mongoose'
import bcrypt from "bcrypt";

// Declare the Schema of the Mongo model
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      // unique: true,
    },
    mobile: {
      type: String,
      required: true,
      // unique: true,
    },
    role: {
      type: String,
      default: "user",
    },
    password: {
      type: String,
      required: true,
    },
    cart: {
      type: Array,
      default: [],
    },
    address: {
      type: String,
    },
    refreshToken: {
      type: String,
    },
  },
  {
    timestamps: true,
  });

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSaltSync(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.isPasswordMatched = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const userModel = mongoose.model('User', userSchema)
//Export the model

export default userModel;