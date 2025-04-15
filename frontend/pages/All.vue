<template>
    <div class="container mt-5 pt-5">
      <div v-for="(noticiasCategoria, categoria) in noticiasPorCategoria" :key="categoria" class="mb-5">
        <h2 class="mb-4 border-bottom pb-2" style="color: #F23568;">{{ categoria }}</h2>
  
        <div class="row">
          <div 
            v-for="noticia in noticiasCategoria" 
            :key="noticia._id" 
            class="col-md-4 mb-4 d-flex"
          >
            <div class="card flex-fill" style="min-height: 100%;">
              <img 
                v-if="noticia.archivo"
                :src="noticia.archivo" 
                class="card-img-top"
                alt="Imagen noticia"
                style="height: 200px; object-fit: cover;"
              />
              <div class="card-body d-flex flex-column">
                <h5 class="card-title">{{ noticia.titulo }}</h5>
                <p class="card-text flex-grow-1">
                  {{ noticia.descripcion.length > 120 ? noticia.descripcion.slice(0, 120) + '...' : noticia.descripcion }}
                </p>
                <router-link 
                  :to="`/Notis/${noticia._id}`" 
                  class="btn btn-outline-primary mt-auto"
                >
                  Leer más
                </router-link>
              </div>
            </div>
          </div>
        </div>
  
      </div>
  
      <div v-if="Object.keys(noticiasPorCategoria).length === 0" class="text-center mt-5">
        <h4>No hay noticias disponibles.</h4>
      </div>
  
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const noticias = ref([])
  const noticiasPorCategoria = ref({})
  
  const obtenerNoticias = async () => {
    try {
      const data = await $fetch('http://localhost:3001/api/noticias') // Ajusta la URL si es necesario
      noticias.value = data
  
      // Agrupar noticias por su categoría
      noticiasPorCategoria.value = data.reduce((acc, noticia) => {
        const categoria = noticia.categoria || 'Sin Categoría'
        if (!acc[categoria]) {
          acc[categoria] = []
        }
        acc[categoria].push(noticia)
        return acc
      }, {})
      
      console.log('Noticias agrupadas:', noticiasPorCategoria.value)
      
    } catch (error) {
      console.error('Error al obtener noticias:', error)
    }
  }
  
  onMounted(() => {
    obtenerNoticias()
  })
  </script>
  