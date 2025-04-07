const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Middleware
app.use(express.json());
app.use(cors());

// Conexión a MongoDB
mongoose.connect('mongodb+srv://yordysdurango:43GpiZMxCyhgKadN@cluster0.aowewmd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Conectado a MongoDB'))
.catch(err => console.error('❌ Error al conectar a MongoDB', err));

// 👉 Importamos las rutas
const usuariosRoutes = require('./routes/usuarios');

// 👉 Usamos las rutas
app.use('/usuarios', usuariosRoutes);

// Ruta base
app.get('/', (req, res) => {
  res.send('¡Hola desde el API conectado a MongoDB!');
});

// después de tus otras rutas
const noticiasRoutes = require('./routes/noticias');
app.use('/api/noticias', noticiasRoutes);


// Servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor backend escuchando en http://localhost:${PORT}`);
});

