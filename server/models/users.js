import mongoose from "./db";

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: String,
    lastName: String,
    email: String,
    password: String,
    books: Array,
    object: Object
  },
  { strict: true }
);

export default mongoose.model("users", userSchema);
