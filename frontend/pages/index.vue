<template>
  <div>
    <!-- NAVBAR -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
      <div class="container">
        <a class="navbar-brand fw-bold text-primary" href="#">Buenaesa<span class="text-dark">.com</span></a>
        <button class="navbar-toggler" type="button" @click="toggleMenu">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div :class="['collapse navbar-collapse', { show: menuOpen }]" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link active" href="#">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#noticias">Noticias</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- HERO -->
    <section class="pt-5" style="background: linear-gradient(to right, #0062E6, #33AEFF); height: 90vh; display: flex; align-items: center;">
      <div class="container text-center text-white">
        <h1 class="display-4 fw-bold animate__animated animate__fadeInDown">Bienvenido a Buenaesa.com</h1>
        <p class="lead animate__animated animate__fadeInUp animate__delay-1s">Noticias que inspiran.</p>
        <a href="#noticias" class="btn btn-light btn-lg mt-4 animate__animated animate__fadeInUp animate__delay-2s">Explorar Noticias</a>
      </div>
    </section>

    <!-- NOTICIAS -->
    <section id="noticias" class="py-5">
      <div class="container">
        <h2 class="text-center mb-5">Últimas Noticias</h2>

        <!-- Noticias por categoría -->
        <div v-for="(noticiasCategoria, categoria) in noticiasPorCategoria" :key="categoria" class="mb-5">
          <h3 class="mb-3">{{ categoria }}</h3>

          <!-- Slider -->
          <div class="slider-container">
            <div class="slider" :id="`slider-${categoria}`">
              <div class="card" v-for="noticia in noticiasCategoria" :key="noticia._id">
                <img :src="noticia.archivo" alt="Imagen" class="card-img-top" v-if="noticia.archivo">
                <div class="card-body">
                  <h5 class="card-title">{{ noticia.titulo }}</h5>
                  <p class="card-text">{{ noticia.descripcion }}</p>
                  <div class="mt-auto text-center">
                    <a href="#" class="btn btn-primary">Ver</a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Flechas -->
            <div class="slider-buttons">
              <button @click="scrollLeft(categoria)">‹</button>
              <button @click="scrollRight(categoria)">›</button>
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const menuOpen = ref(false)
const noticias = ref([])
const noticiasPorCategoria = ref({})

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const obtenerNoticias = async () => {
  try {
    noticias.value = await $fetch('http://localhost:3001/api/noticias')
    agruparPorCategoria()
  } catch (error) {
    console.error('Error al obtener noticias:', error)
  }
}

const agruparPorCategoria = () => {
  noticiasPorCategoria.value = {}

  noticias.value.forEach((noticia) => {
    if (!noticiasPorCategoria.value[noticia.categoria]) {
      noticiasPorCategoria.value[noticia.categoria] = []
    }
    noticiasPorCategoria.value[noticia.categoria].push(noticia)
  })
}

const scrollLeft = (categoria) => {
  const slider = document.getElementById(`slider-${categoria}`)
  slider.scrollLeft -= 300 // Ajusta la cantidad de desplazamiento
}

const scrollRight = (categoria) => {
  const slider = document.getElementById(`slider-${categoria}`)
  slider.scrollLeft += 300 // Ajusta la cantidad de desplazamiento
}

onMounted(() => {
  obtenerNoticias()
})
</script>

<style scoped>
/* Slider contenedor */
.slider-container {
  position: relative;
  width: 100%; /* Asegurarse de que el contenedor tenga un ancho */
  height: 100%; /* Asegurar que el contenedor tenga altura */
}

/* Slider */
.slider {
  display: flex;
  scroll-behavior: smooth;
  padding: 10px 0;
  overflow-x: hidden; /* Ocultar la barra de desplazamiento horizontal */
  overflow-y: hidden; /* Ocultar la barra de desplazamiento vertical */
  -webkit-overflow-scrolling: touch; /* Para mejorar la experiencia de desplazamiento en iOS */
}

/* Card */
.card {
  flex: 0 0 auto;
  width: 250px;
  margin-right: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s;
}
.card:hover {
  transform: scale(1.05);
}
.card-img-top {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

/* Botones de slider */
.slider-buttons {
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
}
.slider-buttons button {
  background-color: #0062E6;
  border: none;
  color: white;
  font-size: 24px;
  padding: 8px 16px;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.7;
  transition: background 0.3s;
}
.slider-buttons button:hover {
  background-color: #004bb5;
}
</style>
