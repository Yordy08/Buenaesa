const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuario');

// Crear un nuevo usuario
router.post('/', async (req, res) => {
  try {
    const { nombre, email } = req.body;
    const nuevoUsuario = new Usuario({ nombre, email });
    await nuevoUsuario.save();
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Listar todos los usuarios
router.get('/', async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
