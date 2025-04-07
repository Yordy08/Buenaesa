const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('./cloudinary');

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'noticias', // Carpeta en Cloudinary
    allowed_formats: ['jpg', 'png', 'mp4', 'mov', 'avi'], // formatos permitidos
    resource_type: 'auto' // Detecta automáticamente si es imagen o video
  }
});

module.exports = storage;
