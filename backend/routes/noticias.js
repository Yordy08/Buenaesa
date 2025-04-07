const express = require('express');
const router = express.Router();
const Noticia = require('../models/Noticia');
const multer = require('multer');
const storage = require('../config/storage');

const upload = multer({ storage });

// Crear noticia
router.post('/', upload.single('archivo'), async (req, res) => {
  try {
    const nuevaNoticia = new Noticia({
      titulo: req.body.titulo,
      descripcion: req.body.descripcion,
      archivo: req.file.path, // Aquí viene la URL de Cloudinary
      fecha: req.body.fecha || Date.now(),
      categoria: req.body.categoria
    });

    await nuevaNoticia.save();
    res.status(201).json(nuevaNoticia);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener todas las noticias
router.get('/', async (req, res) => {
  try {
    const noticias = await Noticia.find();
    res.json(noticias);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
