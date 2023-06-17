import Note from "../models/Note.js";

/**
 * Retrieve all notes for a given author.
 * */
export const getNotes = async (req, res) => {
  try {
    const userId = req.params.userId;
    const notes = await Note.find({ userId: userId });
    if (!notes) {
      throw createError(404, "Notes not found.");
    }
    res
      .status(200)
      .json({ 
        message: "Notes retrieved successfully.",
        status: 200,
        notes: notes 
      });
  } catch (error) {
    const status = err.status || 500;
    const message = err.message || "Something went wrong";
    res.status(status).json({
      message,
      status,
      meta: {
        timestamp: new Date(),
        method: req.method,
        url: req.originalUrl,
      },
    });
  }
};

/**
 * Retrieve a single note for a given author.
 */
export const getNote = async (req, res) => {
  try {
    const { userId, noteId } = req.params;
    const note = await Note.findOne({ userId: userId, _id: noteId });

    if (!note) {
      throw createError(404, "Note not found.");
    }

    res.status(200).json({
      message: 'Note retrieved successfully.',
      status: 200,
      note: note,
    });
  } catch (err) {
    const status = err.status || 500;
    const message = err.message || "Something went wrong";

    res.status(status).json({
      message,
      status,
      meta: {
        timestamp: new Date(),
        method: req.method,
        url: req.originalUrl,
      },
    });
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
      userId: userId,
    });
    const savedNote = await note.save();

    res.status(200).json({
      message: 'Note created successfully.',
      status: 200,
      note: savedNote,
    });
  } catch (err) {
    const status = err.status || 500;
    const message = err.message || "Something went wrong";

    res.status(status).json({
      message,
      status,
      meta: {
        timestamp: new Date(),
        method: req.method,
        url: req.originalUrl,
      },
    });
  }
};

/**
 * Update an existing note.
 */
export const updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const { userId, noteId } = req.params;
    const updatedNote = await Note.findOneAndUpdate(
      { userId: userId, _id: noteId },
      { title: title, content: content },
      { new: true }
    );

    if (!updatedNote) {
      throw createError(404, "Note not found.");
    }

    res.status(200).json({
      message: 'Note updated successfully.',
      status: 200,
      note: updatedNote,
    });
  } catch (err) {
    const status = err.status || 500;
    const message = err.message || "Something went wrong";

    res.status(status).json({
      message,
      status,
      meta: {
        timestamp: new Date(),
        method: req.method,
        url: req.originalUrl,
      },
    });
  }
};

/**
 * Delete all notes for a given author.
 */

export const deleteAllNotes = async (req, res) => {
  try {
    const userId = req.params.userId;
    const deletedNotes = await Note.deleteMany({ userId: userId });

    res.status(200).json({
      message: 'All notes deleted successfully.',
      status: 200,
      notes: deletedNotes,
    });
  } catch (err) {
    const status = err.status || 500;
    const message = err.message || "Something went wrong";

    res.status(status).json({
      message,
      status,
      meta: {
        timestamp: new Date(),
        method: req.method,
        url: req.originalUrl,
      },
    });
  }
};

/**
 * Delete a single note.
 */
export const deleteNote = async (req, res) => {
  try {
    const { userId, noteId } = req.params;
    const deletedNote = await Note.findOneAndDelete({
      userId: userId,
      _id: noteId,
    });

    if (!deletedNote) {
      throw createError(404, "Note not found.");
    }

    res.status(200).json({
      message: 'Note deleted successfully.',
      status: 200,
      note: deletedNote,
    });
  } catch (err) {
    const status = err.status || 500;
    const message = err.message || "Something went wrong";

    res.status(status).json({
      message,
      status,
      meta: {
        timestamp: new Date(),
        method: req.method,
        url: req.originalUrl,
      },
    });
  }
};
