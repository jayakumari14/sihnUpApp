import mongoose, { model } from "mongoose";
mongoose.connect("mongodb://localhost:27017/signApp");

const userSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

// module.exports = mongoose.model("user", userSchema);

const User = mongoose.model("userData", userSchema);
export default User; // Default export
