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
      archivo: req.file.path, // URL de Cloudinary
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

// 🆕 Actualizar una noticia
router.put('/:id', upload.single('archivo'), async (req, res) => {
  try {
    const datosActualizados = {
      titulo: req.body.titulo,
      descripcion: req.body.descripcion,
      categoria: req.body.categoria,
      fecha: req.body.fecha || Date.now()
    };

    if (req.file) {
      datosActualizados.archivo = req.file.path;
    }

    const noticia = await Noticia.findByIdAndUpdate(req.params.id, datosActualizados, { new: true });

    if (!noticia) {
      return res.status(404).json({ message: 'Noticia no encontrada' });
    }

    res.json(noticia);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// 🆕 Eliminar una noticia
router.delete('/:id', async (req, res) => {
  try {
    const noticia = await Noticia.findByIdAndDelete(req.params.id);
    if (!noticia) {
      return res.status(404).json({ message: 'Noticia no encontrada' });
    }
    res.json({ message: 'Noticia eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
