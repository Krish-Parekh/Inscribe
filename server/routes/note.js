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

/**
 * Route serving a list of notes created by a specific author.
 * @name get/:authorId
 */
router.get("/:authorId", getNotes);

/**
 * Route serving a single note by its id and author's id.
 * @name get/:authorId/:noteId
 */
router.get("/:authorId/:noteId", getNote);


/**
 * Route to create a new note.
 * @name post/create
 */
router.post("/create", createNote);

/**
 * Route to update an existing note by its id and author's id.
 * @name put/:authorId/:noteId
 */
router.put("/:authorId/:noteId", updateNote);

/**
 * Route to delete a specific note by its id and author's id.
 * @name delete/:authorId/:noteId
 */
router.delete("/:authorId/:noteId", deleteNote);

/**
 * Route to delete all notes created by a specific author.
 * @name delete/:authorId
 */
router.delete("/:authorId", deleteAllNotes);

export default router;
