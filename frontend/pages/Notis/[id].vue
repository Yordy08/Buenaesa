<template>
    <div>
      <section class="noticia-detalle">
        <div class="max-width">
          <br>
    
          
          <!-- Mostrar un mensaje de carga mientras se obtiene la noticia -->
          <div v-if="loading" class="loading">Cargando...</div>
          
          <!-- Mostrar un mensaje cuando no hay noticia disponible -->
          <div v-else-if="error" class="error">{{ error }}</div>
          
          <!-- Mostrar la noticia si está disponible -->
          <div v-else>
            <h3>{{ noticia.titulo }}</h3>
            <p>{{ noticia.descripcion }}</p>
            <img v-if="noticia.archivo" :src="noticia.archivo" alt="Imagen de la noticia" />
           
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  const noticia = ref(null);
  const loading = ref(true);
  const error = ref(null);
  const route = useRoute();
  const noticiaId = route.params.id; // Capturamos el parámetro 'id' de la URL
  
  // Función para obtener los detalles de la noticia desde la API
  const fetchNoticia = async () => {
    console.log('Iniciando la carga de la noticia con id:', noticiaId); // Log para depuración
    
    try {
      const response = await fetch(`http://localhost:3001/api/noticias/${noticiaId}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (!response.ok) {
        console.error('Error en la respuesta:', response.statusText); // Log del error
        throw new Error('Error al obtener noticia: ' + response.statusText);
      }
  
      const data = await response.json();
      console.log('Respuesta de la API:', data); // Log de la respuesta de la API
  
      if (data && data.noticia) {
        noticia.value = data.noticia;
        console.log('Noticia encontrada:', noticia.value); // Log de la noticia
      } else {
        error.value = 'Noticia no encontrada.';
        console.log('No se encontró la noticia para el id:', noticiaId); // Log si no se encuentra la noticia
      }
    } catch (err) {
      console.error('Error al obtener la noticia:', err); // Log del error
      error.value = 'Error al cargar la noticia. Inténtalo más tarde.';
    } finally {
      loading.value = false; // Ocultamos el mensaje de carga
      console.log('Carga de noticia completada, estado de carga:', loading.value); // Log de finalización
    }
  };
  
  // Cargar los detalles de la noticia cuando se monta el componente
  onMounted(() => {
    console.log('Componente montado, cargando la noticia'); // Log cuando el componente se monta
    fetchNoticia();
  });
  </script>
  
  <style scoped>
  /* Estilos para la sección de detalles */
  .noticia-detalle {
    padding: 20px;
    max-width: 80%;
    margin: 20px auto;
    background-color: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }
  
  .loading,
  .error {
    text-align: center;
    color: #999;
    font-size: 1.1em;
  }
  
  .noticia-detalle h3 {
    font-size: 1.5em;
    margin-bottom: 10px;
  }
  
  .noticia-detalle p {
    color: #666;
    margin-bottom: 15px;
  }
  
  .noticia-detalle img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin-top: 15px;
  }
  
  .error {
    color: red;
    font-weight: bold;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  </style>
  