const crudControllers = {};

const Note = require("../models/Note");

crudControllers.getNotes = async (req, res, next) => {
  const notes = await Note.find();
  res.json(notes);
};

crudControllers.createNotes = async (req, res, next) => {
  const { nombre, apellido, curso } = req.body;
  const newNote = new Note({
    nombre: nombre,
    apellido: apellido,
    curso: curso,
  });
  await newNote.save();
  res.json({ message: "Note Saved" });
};

crudControllers.getNote = async (req, res) => {
  const note = await Note.findById(req.params.id);
  res.json(note);
};

crudControllers.updateNote = async (req, res) => {
  const { nombre, apellido, curso } = req.body;

  await Note.findOneAndUpdate(
    { _id: req.params.id },
    {
      nombre,
      apellido,
      curso,
    }
  );
  res.json({ message: "Note Edited" });
};

crudControllers.deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ message: "Note Deleted" });
};

module.exports = crudControllers;
