<!-- components/Footer.vue -->
<template>
    <footer class="footer">
      <div class="footer-container">
        <p>&copy; 2025 Buenaesa.co - Todos los derechos reservados.</p>
        <div class="footer-links">
          <nuxt-link to="/privacidad" class="footer-link">Política de Privacidad</nuxt-link>
          <nuxt-link to="/terminos" class="footer-link">Términos de Servicio</nuxt-link>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "Footer",
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #333;
    color: white;
    padding: 20px 0;
    text-align: center;
  }
  
  .footer-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .footer-links {
    margin-top: 10px;
  }
  
  .footer-link {
    color: white;
    text-decoration: none;
    margin: 0 10px;
    font-size: 1em;
  }
  
  .footer-link:hover {
    text-decoration: underline;
  }
  </style>
  