// backend/server.js
require('dotenv').config(); // Cargar variables de entorno

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');

const AcceptCookie = require('./models/AcceptCookie'); // Modelo de aceptación de cookies

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: 'https://buenaesa-1.onrender.com', // URL de tu frontend en Render
    credentials: true
  })
);
app.use(helmet());

// Servir archivos estáticos (si usas rutas de imágenes locales como /uploads o /public)
app.use('/uploads', express.static('uploads')); // si tienes una carpeta 'uploads'
app.use('/public', express.static('public'));   // si usas 'public'

// Conexión a MongoDB
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('✅ Conectado a MongoDB'))
  .catch(err => {
    console.error('❌ Error al conectar a MongoDB', err);
    process.exit(1);
  });

// Rutas
const usuariosRoutes = require('./routes/usuarios');
const noticiasRoutes = require('./routes/noticias');
const cookiesRoutes = require('./routes/cookies');

// Usar rutas
app.use('/usuarios', usuariosRoutes);
app.use('/api/noticias', noticiasRoutes);
app.use('/api/cookies', cookiesRoutes);

// Ruta base
app.get('/', (req, res) => {
  res.send('¡Hola desde el API conectado a MongoDB!');
});

// Servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor backend escuchando en http://localhost:${PORT}`);
});
