<template>
    <div class="container mt-5 pt-5">
      <div v-for="(noticiasCategoria, categoria) in noticiasPorCategoria" :key="categoria" class="mb-5">
        <div class="categoria-cinta">
  <div class="categoria-cinta-contenido">
    <img 
      src="/images/rojo.png" 
      alt="Logo Buenaesa" 
      class="logo-cinta"
    />
    <h3 class="categoria-texto">{{ categoria }}</h3>
  </div>
</div>
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
                <div class="mt-auto text-center">
                    
                    <a :href="`/Notis/${noticia._id}`" class="btn btn-outline-info">Explorar Noticias</a>
                  </div>
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
      const data = await $fetch('https://buenaesa-1.onrender.com/api/noticias') // Ajusta la URL si es necesario
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
  
  <style scoped>

.logo-categoria {
  width: 20px;
  height: auto;
  transition: transform 0.3s ease, filter 0.3s ease;
  filter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.2));
}

.animate-category-title:hover .logo-categoria {
  transform: rotate(-5deg) scale(1.1);
  filter: drop-shadow(1px 1px 5px rgba(0, 174, 239, 0.6));
}

.animate-category-title {
  animation: fadeInLeft 1s ease;
}

.categoria-texto {
  font-weight: bold;
  font-size: 1.75rem;
  color: #0FA6A6;
}

.categoria-cinta {
  background: linear-gradient(to right, #f2356774, #0fa6a63a);
  padding: 10px 20px;
  border-radius: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeInLeft 1s ease;
}

.categoria-cinta-contenido {
  display: flex;
  align-items: center;
  gap: 15px;
}

.logo-cinta {
  height: 40px;
  width: auto;
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.3));
  transition: transform 0.3s ease;
}

.categoria-texto {
 
  color:  #0fa6a6;
  font-size: 1.8rem;
  font-weight: bold;
  margin: 0;
}


/* Animación de entrada */
@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

</style>