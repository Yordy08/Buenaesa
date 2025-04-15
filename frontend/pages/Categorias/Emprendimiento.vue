<template>
  <div class="container mt-5 pt-5">
    <h1 class="mb-4 text-center" style="color: #0FA6A6;">Noticias de Emprendimiento</h1>

    <!-- Contenedor de tarjetas usando Flexbox -->
    <div class="d-flex flex-wrap justify-content-center">
      <div 
        v-for="noticia in noticiasEmprendimiento" 
        :key="noticia.id" 
        class="card mb-4 mx-2"
        style="width: 18rem;" 
      >
        <img 
          :src="noticia.archivo" 
          class="card-img-top" 
          alt="Imagen de la noticia"
          v-if="noticia.archivo"
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


          <a :href="`/Notis/${noticia._id}`" class="btn btn-primary">Leer más</a>
        </div>
      </div>
    </div>

    <!-- Mensaje en caso de no haber noticias -->
    <div v-if="noticiasEmprendimiento.length === 0" class="text-center mt-5">
      <h4>No hay noticias de emprendimiento aún.</h4>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const noticias = ref([])
const noticiasEmprendimiento = ref([])

const obtenerNoticias = async () => {
  try {
    const data = await $fetch('https://buenaesa-1.onrender.com/api/noticias')
    noticias.value = data
    filtrarNoticiasEmprendimiento()
  } catch (error) {
    console.error('Error al obtener noticias:', error)
  }
}

const filtrarNoticiasEmprendimiento = () => {
  noticiasEmprendimiento.value = noticias.value.filter(noticia => noticia.categoria === 'Emprendimiento')
}

onMounted(() => {
  obtenerNoticias()
})
</script>

<style scoped>
/* Estilo para las tarjetas */
.card {
  background-color: #f8f9fa;
  border: none;
  transition: transform 0.3s ease;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.card-img-top {
  height: 180px;
  object-fit: cover;
}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.card-title {
  color: #0FA6A6;
  font-weight: bold;
}

.card-text {
  font-size: 1rem;
}

.card-text small {
  font-size: 0.875rem;
  color: #6c757d;
}

.btn-primary {
  background-color: #0FA6A6;
  border-color: #0FA6A6;
}

.btn-primary:hover {
  background-color: #14b1b1;
  border-color: #14b1b1;
}

/* Estilos para el contenedor de las tarjetas */
.d-flex {
  display: flex;
  flex-wrap: wrap; /* Permite que las tarjetas se ajusten en varias filas si es necesario */
  justify-content: center; /* Centra las tarjetas */
}

.mx-2 {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

@media (max-width: 768px) {
  .card {
    width: 100%;
    max-width: 350px;
  }
}
</style>
