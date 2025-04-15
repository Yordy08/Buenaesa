// backend/server.js
require('dotenv').config();  // Cargar variables de entorno
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');  // Seguridad adicional
const AcceptCookie = require('./models/AcceptCookie');  // Modelo de aceptación de cookies

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());

// Conexión a MongoDB
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('✅ Conectado a MongoDB'))
  .catch(err => {
    console.error('❌ Error al conectar a MongoDB', err);
    process.exit(1);
  });

// Rutas
const usuariosRoutes = require('./routes/usuarios');
const noticiasRoutes = require('./routes/noticias');
const cookiesRoutes = require('./routes/cookies');  // RUTA DE COOKIES

// Usar rutas
app.use('/usuarios', usuariosRoutes);
app.use('/api/noticias', noticiasRoutes);
app.use('/api/cookies', cookiesRoutes);  // USO DE LA RUTA DE COOKIES

// Ruta base
app.get('/', (req, res) => {
  res.send('¡Hola desde el API conectado a MongoDB!');
});

// Servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor backend escuchando en http://localhost:${PORT}`);
});
