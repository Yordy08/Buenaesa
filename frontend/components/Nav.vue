<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
    <div class="container">
      <a class="navbar-brand fw-bold" href="/">
        <span style="color: #0FA6A6;">Buena</span><span style="color: #F23568;">e</span><span style="color: #0FA6A6;">sa.co</span>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link active" href="/">Inicio</a>
          </li>
          <li class="nav-item">
            <router-link to="/All" class="nav-link">Noticias</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/somos" class="nav-link">Quienes Somos</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contac" class="nav-link">Contacto</router-link>
          </li>

          <!-- Menú Perfil -->
          <li v-if="usuario" class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
              data-bs-toggle="dropdown" aria-expanded="false">
              Perfil
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" @click="irACreateNoticias" style="cursor: pointer;">Admin</a></li>
              <li><a class="dropdown-item" @click="cerrarSesion" style="cursor: pointer;">Cerrar sesión</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'

const router = useRouter()

// ✅ Verificar si el usuario está logueado (usando localStorage o alguna lógica de autenticación)
const usuario = ref(null)

onMounted(() => {
  // Verificar si el usuario está en el almacenamiento local
  const storedUser = localStorage.getItem('usuario')
  if (storedUser) {
    usuario.value = JSON.parse(storedUser) // Asumimos que el usuario está en formato JSON
  }
})

const irACreateNoticias = () => {
  router.push('/createnoticias')
}

const cerrarSesion = () => {
  // Eliminar al usuario del almacenamiento local y restablecer el estado
  localStorage.removeItem('usuario')
  usuario.value = null
  router.push('/') // Redirigir al inicio
}
</script>

<style scoped>
@import 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css';

.navbar {
  padding: 1rem;
}
.nav-link {
  font-size: 1.1rem;
  font-weight: 600;
}
.nav-item {
  margin-left: 1rem;
}
.dropdown-menu {
  width: 200px;
}
</style>
