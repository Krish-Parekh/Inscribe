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
 * @name get/:userId
 */
router.get("/:userId", getNotes);

/**
 * Route serving a single note by its id and author's id.
 * @name get/:userId/:noteId
 */
router.get("/:userId/:noteId", getNote);


/**
 * Route to create a new note.
 * @name post/create
 */
router.post("/create", createNote);

/**
 * Route to update an existing note by its id and author's id.
 * @name put/:userId/:noteId
 */
router.put("/:userId/:noteId", updateNote);

/**
 * Route to delete a specific note by its id and author's id.
 * @name delete/:userId/:noteId
 */
router.delete("/:userId/:noteId", deleteNote);

/**
 * Route to delete all notes created by a specific author.
 * @name delete/:userId
 */
router.delete("/:userId", deleteAllNotes);

export default router;
