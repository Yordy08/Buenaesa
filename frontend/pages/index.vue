<template>
  <div>
    <!-- CAROUSEL -->
    <section 
  class="pt-5" 
  style="background: linear-gradient(to right, #F23568, #0FA6A6); min-height: 95vh; display: flex; justify-content: center; align-items: center; text-align: center;"
>
  <div class="container">
    <div id="newsCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
      <div class="carousel-inner">
        <div 
          v-for="(noticia, index) in primerasNoticias" 
          :key="noticia._id" 
          :class="['carousel-item', { active: index === 0 }]"
        >
          <img 
            :src="noticia.archivo" 
            alt="Imagen" 
            class="d-block w-100" 
            v-if="noticia.archivo"
            style="max-height: 80vh; object-fit: cover; width: 100%;"
          >

          <!-- TEXTO EN ESCRITORIO (flotando sobre la imagen) -->
          <div 
            class="carousel-caption d-none d-md-block p-3 rounded" 
            style="background: rgba(0, 0, 0, 0.6); backdrop-filter: blur(5px); border-radius: 1rem;"
          >
            <h5 class="fw-bold text-white">{{ noticia.titulo }}</h5>
            <p class="text-light">
              {{ noticia.descripcion.length > 230 ? noticia.descripcion.slice(0, 230) + '...' : noticia.descripcion }}
            </p>
            <center>
             <router-link 
              :to="`/Notis/${noticia._id}`" 
              class="btn btn-outline-light mt-2"
            >
              Ver más
            </router-link> 
            </center>
       


          </div>

          <!-- TEXTO EN CELULAR (debajo de la imagen) -->
          <div class="d-block d-md-none text-center mt-3">
            <h5 class="fw-bold text-white">{{ noticia.titulo }}</h5>
            <p class="text-light">
              {{ noticia.descripcion.length > 230 ? noticia.descripcion.slice(0, 230) + '...' : noticia.descripcion }}
            </p>
            <a 
  :href="`/Notis/${noticia._id}`" 
  class="btn btn-outline-light mt-2"
>
  Ver más
</a>

          </div>

        </div>
      </div>

      <!-- Botones de control del carrusel -->
      <button class="carousel-control-prev" type="button" data-bs-target="#newsCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Anterior</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#newsCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Siguiente</span>
      </button>
    </div>
  </div>
</section>




    <!-- NOTICIAS -->
    <section id="noticias" class="py-5">
      <div class="container">
        <!-- Noticias por categoría -->
        <div v-for="(noticiasCategoria, categoria) in noticiasPorCategoria" :key="categoria" class="mb-5">
          <h3 class="mb-3">{{ categoria }}</h3>
          <!-- Slider -->
          <div class="slider-container">
            <div class="slider" :id="`slider-${categoria}`">
              <div class="card" v-for="noticia in noticiasCategoria" :key="noticia._id">
                <img :src="noticia.archivo" alt="Imagen" class="card-img-top" v-if="noticia.archivo">
                <div class="card-body">
                  <h5 class="card-title">{{ noticia.titulo.length > 10 ? noticia.descripcion.slice(0, 120) + '...' :noticia.titulo }}</h5>
                  <div class="mt-auto text-center">
                    
                    <a :href="`/Notis/${noticia._id}`" class="btn btn-outline-info">Explorar Noticias</a>
                  </div>
                </div>
              </div>
            </div>
            <!-- Botones de flechas para el slider -->
            <div class="slider-buttons">
              <button @click="scrollLeft(categoria)" class="slider-button-left">‹</button>
              <button @click="scrollRight(categoria)" class="slider-button-right">›</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const noticias = ref([])
const primerasNoticias = ref([])
const noticiasPorCategoria = ref({})

const obtenerNoticias = async () => {
  try {
    noticias.value = await $fetch('https://buenaesa-1.onrender.com/api/noticias')
    agruparPorCategoria()
    filtrarNoticiasRecientes()
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

const filtrarNoticiasRecientes = () => {
  noticias.value.sort((a, b) => new Date(b.fecha) - new Date(a.fecha))
  primerasNoticias.value = noticias.value.slice(0, 3)
}

const scrollLeft = (categoria) => {
  const slider = document.getElementById(`slider-${categoria}`)
  slider.scrollLeft -= 300
}

const scrollRight = (categoria) => {
  const slider = document.getElementById(`slider-${categoria}`)
  slider.scrollLeft += 300
}

onMounted(() => {
  obtenerNoticias()
})
</script>

<style scoped>
/* Slider contenedor */
.slider-container {
  position: relative;
  width: 100%;
  height: 100%;
}

/* Slider */
.slider {
  display: flex;
  scroll-behavior: smooth;
  padding: 10px 0;
  overflow-x: hidden;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
}

/* Card */
.card {
  flex: 0 0 auto;
  width: 250px;
  margin-right: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: #0FA6A6;
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
.slider-button-left,
.slider-button-right {
  background-color: #0FA6A6;
  border: none;
  color: white;
  font-size: 24px;
  padding: 8px 16px;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.7;
  transition: background 0.3s;
}
.slider-button-left:hover,
.slider-button-right:hover {
  background-color: #F23568;
}

/* CAROUSEL */
.carousel-inner {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-item {
  min-width: 100%;
  box-sizing: border-box;
}

.carousel-caption {
  position: absolute;
  bottom: 15%;
  left: 5%;
  right: 5%;
  background-color: #0fa6a685;
  padding: 10px 20px;
  border-radius: 5px;
  color: white;
  text-align: left;
}

.carousel-caption h5 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.carousel-caption p {
  font-size: 1.2rem;
  margin: 0;
}
</style>
