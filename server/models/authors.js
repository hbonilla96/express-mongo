import mongoose from "./db";

const Schema = mongoose.Schema;

const authorSchema = new Schema(
  {
    name: String,
    lastName: String,
    birthDate: Date,
    bithPlace: String,
    language: String,
    pages: Number
  },
  { strict: true }
);

export default mongoose.model("authors", authorSchema);
