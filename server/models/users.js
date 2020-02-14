import mongoose from "./db";

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: String,
    lastName: String,
    email: String,
    password: String
  },
  { strict: true }
);

export default mongoose.model("users", userSchema);
