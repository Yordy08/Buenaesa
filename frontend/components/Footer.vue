<template>
  <footer class="footer">
    <div class="footer-container">
      <p>&copy; 2025 Buenaesa.co - Todos los derechos reservados.</p>
      <div class="footer-links">
        <!-- <nuxt-link to="/privacidad" class="footer-link">Política de Privacidad</nuxt-link>
        <nuxt-link to="/terminos" class="footer-link">Términos de Servicio</nuxt-link> -->
      </div>
      <div class="social-links">
        <a href="https://www.facebook.com/share/16SyGJXN87/" target="_blank" class="social-link" aria-label="Facebook">
          <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg" alt="Facebook" width="24" height="24" />
        </a>
        <a href="https://x.com/search?q=buenaesa.co&t=dDRRij7KsgYoBHs2QI0HPA&s=08" target="_blank" class="social-link" aria-label="Twitter/X">
          <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/x.svg" alt="Twitter/X" width="24" height="24" />
        </a>
        <a href="https://www.instagram.com/buenaesa.co?igsh=ZWVjdDRzc3YxeHhk" target="_blank" class="social-link" aria-label="Instagram">
          <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" alt="Instagram" width="24" height="24" />
        </a>
        <a href="https://www.tiktok.com/@buenaesa.co?_t=ZS-8vb1MUipas6&_r=1" target="_blank" class="social-link" aria-label="TikTok">
          <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tiktok.svg" alt="TikTok" width="24" height="24" />
        </a>
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
  padding: 5px 0;
  text-align: center;
  font-family: Arial, sans-serif;
}

.footer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-links {
  margin-top: -20px;
}

.footer-link {
  color: white;
  text-decoration: none;
  margin: 0 15px;
  font-size: 4.1em;
}

.footer-link:hover {
  text-decoration: underline;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 12px;
}

.social-link img {
  width: 30px;
  height: 30px;
  filter: brightness(0) invert(1);
  transition: transform 0.3s ease;
}

.social-link img:hover {
  transform: scale(1.2);
}

.footer-container p {
  color: white;
}
</style>
