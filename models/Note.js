const { Schema, model } = require('mongoose');


const noteSchema = new Schema({
    title: String,
   description: String
}, {
    timestamps: true
})

module.exports = model('Note', noteSchema)
