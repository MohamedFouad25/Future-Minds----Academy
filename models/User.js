import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  fullName: String,
  email: { type: String, unique: true },
  password: String
});
export default mongoose.models.User || mongoose.model("User", UserSchema);
