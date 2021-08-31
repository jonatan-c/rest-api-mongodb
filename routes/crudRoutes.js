const {Router} = require('express')
const router = Router();

const {getNotes,createNotes,getNote,updateNote,deleteNote} = require('../controllers/crudControllers')

router.get('/', getNotes)
router.post('/', createNotes);

router.get('/:id', getNote);
router.put('/:id', updateNote);
router.delete('/:id', deleteNote);


module.exports =  router