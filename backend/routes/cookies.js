const express = require('express');
const router = express.Router();
const AcceptCookie = require('../models/AcceptCookie');
const requestIp = require('request-ip');

// Ruta para registrar cuando aceptan cookies
router.post('/accept', async (req, res) => {
  try {
    // Capturamos la IP del usuario
    const ipAddress = requestIp.getClientIp(req);  // Obtiene la IP

    const newAccept = new AcceptCookie({
      ipAddress: ipAddress,  // Guardamos la IP junto con la aceptación
    });

    await newAccept.save();
    const responseObj = newAccept.toObject();  // Convierte la instancia de Mongoose en un objeto plano

    res.status(201).json({ message: 'Cookie aceptada y registrada', data: responseObj });
  } catch (error) {
    console.error('Error al guardar cookie:', error);
    res.status(500).json({ message: 'Error al registrar aceptación' });
  }
});

module.exports = router;
