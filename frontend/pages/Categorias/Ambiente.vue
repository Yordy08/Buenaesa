<template>
    <div class="container mt-5 pt-5">
      <h1 class="mb-4 text-center" style="color: #0FA6A6;">Ambiente Paz y Convivencia</h1>
  
      <!-- Contenedor de tarjetas -->
      <div class="d-flex flex-wrap justify-content-center">
        <div 
          v-for="noticia in noticiasAmbiente" 
          :key="noticia._id" 
          class="card mb-4 mx-2"
          style="width: 18rem;"
        >
          <img 
            v-if="noticia.archivo"
            :src="noticia.archivo" 
            class="card-img-top"
            alt="Imagen de la noticia"
            style="height: 200px; object-fit: cover;"
          />
          <div class="card-body">
            <h5 class="card-title">{{ noticia.titulo }}</h5>
            <p 
  style="display: -webkit-box; 
         -webkit-line-clamp: 3; 
         line-clamp: 3;
         -webkit-box-orient: vertical; 
         overflow: hidden; 
         text-overflow: ellipsis; 
         text-align: justify; 
         word-spacing: -1px; 
         letter-spacing: -0.5px;"
>
  {{ noticia.descripcion.length > 120 ? noticia.descripcion.slice(0, 120) + '...' : noticia.descripcion }}
</p>

<p class="card-text">
  <small class="text-muted">{{ noticia.fecha.slice(0, 10) }}</small>
</p>

            <router-link 
              :to="`/Notis/${noticia._id}`" 
              class="btn btn-primary"
            >
              Leer más
            </router-link>
          </div>
        </div>
      </div>
  
      <!-- Mensaje si no hay noticias -->
      <div v-if="noticiasAmbiente.length === 0" class="text-center mt-5">
        <h4>No hay noticias de ambiente aún.</h4>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const noticias = ref([])
  const noticiasAmbiente = ref([])
  
  const obtenerNoticias = async () => {
    try {
      const data = await $fetch('https://buenaesa-1.onrender.com/api/noticias') // <-- Asegúrate que esta ruta es la correcta
      noticias.value = data
  
      noticiasAmbiente.value = noticias.value.filter(
        noticia => noticia.categoria === 'Ambiente'
      )
  
      console.log('Noticias de Ambiente:', noticiasAmbiente.value)
    } catch (error) {
      console.error('Error obteniendo noticias:', error)
    }
  }
  
  onMounted(() => {
    obtenerNoticias()
  })
  </script>
  