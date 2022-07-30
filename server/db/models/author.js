import mongoose from "mongoose";

const AuthorSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  genre: String,
  age: Number
});

const Author = mongoose.model("Author", AuthorSchema);

export default Author;