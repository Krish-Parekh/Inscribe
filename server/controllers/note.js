import Note from "../models/Note.js";

export const getNotes = async (req, res) => {
  try {
    const authorId = req.params.id;
    const notes = await Note.find({ authorId: authorId });
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getNote = async (req, res) => {
  try {
    const { authorId, noteId } = req.params;
    const note = await Note.findOne({ authorId: authorId, _id: noteId });
    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createNote = async (req, res) => {
  try {
    const { title, content, authorId } = req.body;
    const note = new Note({
      title: title,
      content: content,
      authorId: authorId,
    });
    const savedNote = await note.save();
    res.status(200).json(savedNote);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

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

export const deleteAllNotes = async (req, res) => {
  try {
    const authorId = req.params.id;
    const deletedNotes = await Note.deleteMany({ authorId: authorId });
    res.status(200).json(deletedNotes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

