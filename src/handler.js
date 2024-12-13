const { nanoid } = require('nanoid');
const notes = require('./notes');

// Handler untuk menambahkan catatan
const addNoteHandler = (req, res) => {
  const { title, tags, body } = req.body;
  const id = nanoid(16);
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;

  const newNote = {
    title,
    tags,
    body,
    id,
    createdAt,
    updatedAt,
  };

  notes.push(newNote);

  const isSuccess = notes.some((note) => note.id === id);

  if (isSuccess) {
    return res.status(201).json({
      status: 'success',
      message: 'Catatan berhasil ditambahkan',
      data: {
        noteId: id,
      },
    });
  }

  return res.status(500).json({
    status: 'fail',
    message: 'Catatan gagal ditambahkan',
  });
};

// Handler untuk mendapatkan semua catatan
const getAllNotesHandler = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      notes,
    },
  });
};

// Handler untuk mendapatkan catatan berdasarkan ID
const getNoteByIdHandler = (req, res) => {
  const { id } = req.params;

  const note = notes.find((n) => n.id === id);

  if (note) {
    return res.status(200).json({
      status: 'success',
      data: {
        note,
      },
    });
  }

  return res.status(404).json({
    status: 'fail',
    message: 'Catatan tidak ditemukan',
  });
};

// Handler untuk mengedit catatan berdasarkan ID
const editNoteByIdHandler = (req, res) => {
  const { id } = req.params;
  const { title, tags, body } = req.body;
  const updatedAt = new Date().toISOString();

  const index = notes.findIndex((note) => note.id === id);

  if (index !== -1) {
    notes[index] = {
      ...notes[index],
      title,
      tags,
      body,
      updatedAt,
    };

    return res.status(200).json({
      status: 'success',
      message: 'Catatan berhasil diperbarui',
    });
  }

  return res.status(404).json({
    status: 'fail',
    message: 'Gagal memperbarui catatan. Id tidak ditemukan',
  });
};

// Handler untuk menghapus catatan berdasarkan ID
const deleteNoteByIdHandler = (req, res) => {
  const { id } = req.params;

  const index = notes.findIndex((note) => note.id === id);

  if (index !== -1) {
    notes.splice(index, 1);

    return res.status(200).json({
      status: 'success',
      message: 'Catatan berhasil dihapus',
    });
  }

  return res.status(404).json({
    status: 'fail',
    message: 'Catatan tidak ditemukan',
  });
};

module.exports = {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  editNoteByIdHandler,
  deleteNoteByIdHandler,
};
