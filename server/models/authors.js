import mongoose from "./db";

const Schema = mongoose.Schema;

const authorSchema = new Schema(
  {
    name: String,
    lastName: String,
    birthDate: Date,
    bithPlace: String,
    deathPlace: String
  },
  { strict: true }
);

export default mongoose.model("authors", authorSchema);
