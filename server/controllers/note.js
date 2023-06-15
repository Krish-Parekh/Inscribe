import Note from "../models/Note.js";

/**
 * Retrieve all notes for a given author.
 * */
export const getNotes = async (req, res) => {
  try {
    const authorId = req.params.authorId;
    const notes = await Note.find({ authorId: authorId });
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Retrieve a single note for a given author.
 */
export const getNote = async (req, res) => {
  try {
    const { authorId, noteId } = req.params;
    const note = await Note.findOne({ authorId: authorId, _id: noteId });
    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Create a new note.
 *  */
export const createNote = async (req, res) => {
  try {
    const { title, content, userId } = req.body;
    const note = new Note({
      title: title,
      content: content,
      authorId: userId,
    });
    const savedNote = await note.save();
    res.status(200).json(savedNote);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Update an existing note.
 */
export const updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const { authorId, noteId } = req.params;
    const updatedNote = await Note.findOneAndUpdate(
      { authorId: authorId, _id: noteId },
      { title: title, content: content },
      { new: true }
    );
    res.status(200).json(updatedNote);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Delete all notes for a given author.
 */

export const deleteAllNotes = async (req, res) => {
  try {
    const authorId = req.params.authorId;
    const deletedNotes = await Note.deleteMany({ authorId: authorId });
    res.status(200).json(deletedNotes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Delete a single note.
 */
export const deleteNote = async (req, res) => {
  try {
    const { authorId, noteId } = req.params;
    const deletedNote = await Note.findOneAndDelete({
      authorId: authorId,
      _id: noteId,
    });
    res.status(200).json(deletedNote);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
