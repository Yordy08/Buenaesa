<template>
    <div class="contact-wrapper">
      <div class="contact-info">
        <h2>Información de contacto</h2>
        <p><strong>Correo electrónico:</strong> contacto@tusitio.com</p>
        <p><strong>Teléfono:</strong> +57 300 123 4567</p>
        <p><strong>Dirección:</strong> Montería, Córdoba, Colombia</p>
      </div>
  
      <div class="map-container">
        <iframe
          title="Ubicación en Montería"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.130825043479!2d-75.88297302587646!3d8.747983195016078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e5ea32177cd1a07%3A0xc514c9bb6abf5ef0!2sMonter%C3%ADa%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sco!4v1712799872825!5m2!1ses-419!2sco"
          width="100%"
          height="350"
          style="border:0;"
      
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  </template>
  
  <style scoped>
  .contact-wrapper {
    max-width: 900px;
    margin: 40px auto;
    padding: 20px;
    background: #ffffff;
    border-radius: 10px;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.08);
  }
  
  .contact-info {
    margin-bottom: 30px;
  }
  
  .contact-info h2 {
    margin-bottom: 10px;
    font-size: 24px;
    color: #333;
  }
  
  .contact-info p {
    margin: 6px 0;
    font-size: 16px;
    color: #555;
  }
  
  .map-container iframe {
    border-radius: 10px;
  }
  </style>
  