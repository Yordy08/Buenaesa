const mongoose = require('mongoose');

const AcceptCookieSchema = new mongoose.Schema({
  acceptedAt: {
    type: Date,
    default: Date.now
  },
  ipAddress: {  // Añadimos un campo para la IP
    type: String,
    required: true
  }
});

module.exports = mongoose.model('AcceptCookie', AcceptCookieSchema);
