import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: String,
  avatar: String,
  email: String,
  password: String,
  age: Number,
  city: String,
});

export default mongoose.model("users", userSchema);
