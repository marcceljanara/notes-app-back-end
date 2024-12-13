/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const {
  addNoteHandler, getAllNotesHandler,
  getNoteByIdHandler, editNoteByIdHandler, deleteNoteByIdHandler,
} = require('./handler');

const router = express.Router();

router.post('/notes', addNoteHandler);
router.get('/notes', getAllNotesHandler);
router.get('/notes/:id', getNoteByIdHandler);
router.put('/notes/:id', editNoteByIdHandler);
router.delete('/notes/:id', deleteNoteByIdHandler);

module.exports = router;
