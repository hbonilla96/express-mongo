import mongoose from "./db";

const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    name: String,
    description: String,
    publishDate: Date,
    gender: String,
    language: String,
    pages: Number
  },
  { strict: true }
);

export default mongoose.model("books", bookSchema);
