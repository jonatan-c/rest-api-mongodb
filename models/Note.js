const { Schema, model } = require("mongoose");

const noteSchema = new Schema(
  {
    nombre: String,
    apellido: String,
    curso: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Note", noteSchema);
