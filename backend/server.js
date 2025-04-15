// backend/server.js
require('dotenv').config(); // Cargar variables de entorno

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares de seguridad y parseo
app.use(express.json());
app.use(helmet());

app.use(cors({
  origin: ['http://localhost:3000', 'https://buenaesa.onrender.com'],
  credentials: true
}));


// Archivos estáticos si los usas
app.use('/uploads', express.static('uploads'));
app.use('/public', express.static('public'));

// Conexión a MongoDB
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
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

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor backend activo en http://localhost:${PORT}`);
});
