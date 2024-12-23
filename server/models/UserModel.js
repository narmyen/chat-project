import { genSalt } from "bcrypt";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    require: [true, "Email is Required"],
    unique: true,
  },
  password: {
    type: String,
    require: [true, "Password is Required"],
    unique: true,
  },
  firstName: {
    type: String,
    require: false
  },
  lasrName: {
    type: String,
    require: false
  },
  image: {
    type: String,
    require: false
  },
  color: {
    type: Number,
    require: false
  },
  profileSetuo: {
    type: Boolean,
    default: false
  }
})

userSchema.pre("save", async function (next) {
  const salt = await genSalt();
  this.password = await hash(this.password, salt);
  next();
})

const User = mongoose.model("User", userSchema);

export default User;