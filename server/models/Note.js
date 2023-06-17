import mongoose from "mongoose";

const noteSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      require: true,
    },
    userId: {
      type: String,
      required: true, 
    }
  },
  { timestamps: true }
);

const Note = mongoose.model("Note", noteSchema);
export default Note;
