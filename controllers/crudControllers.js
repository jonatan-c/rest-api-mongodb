const crudControllers = {};

const Note = require('../models/Note')

crudControllers.getNotes = async(req,res,next) => {
    const notes = await Note.find();
    res.json(notes)
}

crudControllers.createNotes = async (req, res, next) =>{
    const { title, description } = req.body;
    const newNote = new Note({
        title: title,
        description: description
    });
    await newNote.save();
    res.json({ message: "Note Saved" })
}



crudControllers.getNote = async (req, res) => {
    const note = await Note.findById(req.params.id);
    res.json(note)
}

crudControllers.updateNote = async (req, res) => {
    const { title, description } = req.body;

    await Note.findOneAndUpdate({ _id: req.params.id }, {
        title,
        description
    })
    res.json({ message: "Note Edited" })
}

crudControllers.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id)
    res.json({ message: "Note Deleted" })
}

module.exports = crudControllers;