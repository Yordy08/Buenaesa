<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
    <div class="container">
      <a href="/">
  <img src="/images/logo-buenaesa.png" alt="Logo Buenaesa" class="logo-navbar" />
</a>






      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>


      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <hr>
          <li class="nav-item">
            <router-link to="/" class="nav-link menu-link">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/All" class="nav-link menu-link">Actualidad</router-link>
          </li>

          <li class="nav-item dropdown">
  <a 
    class="nav-link dropdown-toggle" 
    href="#" 
    id="navbarDropdownNoticias" 
    role="button"
    data-bs-toggle="dropdown" 
    aria-expanded="false"
    style="cursor: pointer;"
  >
    Noticias
  </a>
  <ul class="dropdown-menu" aria-labelledby="navbarDropdownNoticias">
    <li>
      <router-link to="/Categorias/Ciencia" class="dropdown-item" @click="cerrarMenuManual">
        Ciencia e innovación
      </router-link>
    </li>
    <li>
      <router-link to="/Categorias/Cultura" class="dropdown-item" @click="cerrarMenuManual">
        Cultura
      </router-link>
    </li>
    <li>
      <router-link to="/Categorias/Personajes" class="dropdown-item" @click="cerrarMenuManual">
        Personajes
      </router-link>
    </li>
    <li>
      <router-link to="/Categorias/Ambiente" class="dropdown-item" @click="cerrarMenuManual">
        Paz & convivencia
      </router-link>
    </li>
    <li>
      <router-link to="/Categorias/Emprendimiento" class="dropdown-item" @click="cerrarMenuManual">
        Emprendimiento
      </router-link>
    </li>
  </ul>
</li>



          
          <li class="nav-item">
            <router-link to="/somos" class="nav-link menu-link">Quienes Somos</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contac" class="nav-link menu-link">Contacto</router-link>
          </li>

 <li v-if="usuario" class="nav-item dropdown">
  <a 
    class="nav-link dropdown-toggle" 
    href="#" 
    id="navbarDropdown" 
    role="button"
    data-bs-toggle="dropdown" 
    aria-expanded="false"
    style="cursor: pointer;"
  >
    Perfil
  </a>
  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
    <li>
      <a 
        class="dropdown-item" 
        @click="() => { irACreateNoticias(); cerrarMenuManual(); }"
        style="cursor: pointer;"
      >
        Admin
      </a>
    </li>
    <li>
      <a 
        class="dropdown-item" 
        @click="() => { cerrarSesion(); cerrarMenuManual(); }"
        style="cursor: pointer;"
      >
        Cerrar sesión
      </a>
    </li>
  </ul>
</li>

        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const usuario = ref(null)

onMounted(async () => {
  const storedUser = localStorage.getItem('usuario')
  if (storedUser) {
    usuario.value = JSON.parse(storedUser)
  }

  // Espera a que todo el DOM esté listo
  await nextTick()

  // Selecciona todos los enlaces del menú
  const menuLinks = document.querySelectorAll('.menu-link')
  menuLinks.forEach(link => {
    link.addEventListener('click', cerrarMenuManual)
  })
})

const cerrarMenuManual = () => {
  const navbar = document.getElementById('navbarNav')
  if (navbar.classList.contains('show')) {
    navbar.classList.remove('show') // Oculta el menú manualmente
  }
}

const irACreateNoticias = () => {
  router.push('/createnoticias')
}

const cerrarSesion = () => {
  localStorage.removeItem('usuario')
  usuario.value = null
  router.push('/')
}
</script>

<style scoped>
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