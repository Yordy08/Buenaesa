require('dotenv').config(); // Cargar variables de entorno

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware de seguridad y parseo
app.use(express.json());
app.use(helmet());

// CORS: permite solicitudes desde frontend local y dominios en producción
app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://buenaesa.onrender.com',
    'https://www.buenaesa.co',
    'https://buenaesa-yordy08s-projects.vercel.app' // Vercel frontend
  ],
  credentials: true
}));

// Servir archivos estáticos
app.use('/uploads', express.static('uploads'));
app.use('/public', express.static('public'));

// Conexión a MongoDB
mongoose.connect(process.env.DB_URI)
  .then(() => console.log('✅ Conectado a MongoDB'))
  .catch(err => {
    console.error('❌ Error al conectar a MongoDB:', err);
    process.exit(1);
  });

// Rutas
const usuariosRoutes = require('./routes/usuarios');
const noticiasRoutes = require('./routes/noticias');
const cookiesRoutes = require('./routes/cookies');

app.use('/usuarios', usuariosRoutes);
app.use('/api/noticias', noticiasRoutes);
app.use('/api/cookies', cookiesRoutes);

// Ruta base de prueba
app.get('/', (req, res) => {
  res.send('🚀 API corriendo y conectada a MongoDB');
});

// Middleware para errores no controlados
app.use((err, req, res, next) => {
  console.error('❌ Error no controlado:', err.stack);
  res.status(500).send('Error interno del servidor');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor backend activo en http://localhost:${PORT}`);
});
