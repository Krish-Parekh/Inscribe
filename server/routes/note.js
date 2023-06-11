import express from "express";
import {
  createNote,
  deleteNote,
  getNotes,
  updateNote,
  getNote,
  deleteAllNotes,
} from "../controllers/note.js";

const router = express.Router();

router.get("/:authorId", getNotes);
router.get("/:authorId/:noteId", getNote);

router.post("/create", createNote);

router.put("/:authorId/:noteId", updateNote);

router.delete("/:authorId/:noteId", deleteNote);
router.delete("/:authorId", deleteAllNotes);

export default router;
