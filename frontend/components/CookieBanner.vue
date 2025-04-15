<template>
  <div v-if="showBanner" class="cookie-banner">
    <p>Este sitio web utiliza cookies para mejorar la experiencia.</p>
    <div class="buttons">
      <button @click="acceptCookies" class="accept-btn">Aceptar</button>
      <button @click="acceptCookies" class="reject-btn">Rechazar</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      showBanner: false,  // Mostrar u ocultar el banner
    };
  },
  mounted() {
    // Al cargar la página, verifica si ya se aceptaron o rechazaron cookies
    const cookiesDecision = localStorage.getItem('cookiesDecision');
    if (!cookiesDecision) {
      this.showBanner = true;
    }
  },
  methods: {
    async acceptCookies() {
      try {
        await axios.post('http://localhost:3001/api/cookies/accept');
        localStorage.setItem('cookiesDecision', 'accepted');
        this.showBanner = false;
      } catch (error) {
        console.error('Error al aceptar cookies:', error);
      }
    },
    async rejectCookies() {
      try {
        await axios.post('http://localhost:3001/api/cookies/reject');
        localStorage.setItem('cookiesDecision', 'rejected');
        this.showBanner = false;
      } catch (error) {
        console.error('Error al rechazar cookies:', error);
      }
    }
  }
}
</script>

<style scoped>
.cookie-banner {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 4px 15px rgba(0,0,0,0.2);
  z-index: 1000;
  max-width: 300px;
  animation: fadeInUp 0.5s ease;
}

.buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.accept-btn {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
}

.reject-btn {
  background-color: gray;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
}

@keyframes fadeInUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
