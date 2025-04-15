<template>
    <div class="container mt-5 pt-5">
      <h1 class="mb-4 text-center" style="color: #0FA6A6;">Noticias de Ciencia e Innovación</h1>
  
      <!-- Contenedor de tarjetas -->
      <div class="d-flex flex-wrap justify-content-center">
        <div 
          v-for="noticia in noticiasCiencia" 
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
      <div v-if="noticiasCiencia.length === 0" class="text-center mt-5">
        <h4>No hay noticias de ciencia e innovación aún.</h4>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const noticias = ref([])
  const noticiasCiencia = ref([])
  
  const obtenerNoticias = async () => {
    try {
      const data = await $fetch('https://buenaesa-1.onrender.com/api/noticias') // <-- Cambia esto a tu API correcta
      console.log('Noticias cargadas:', data)
  
      noticias.value = data
      noticiasCiencia.value = noticias.value.filter(noticia => noticia.categoria === 'Ciencia e innovación')
      console.log('Noticias de Ciencia e Innovación:', noticiasCiencia.value)
    } catch (error) {
      console.error('Error al obtener noticias:', error)
    }
  }
  
  onMounted(() => {
    obtenerNoticias()
  })
  </script>
  