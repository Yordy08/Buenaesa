<template>
    <div class="p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3 d-flex flex-wrap justify-content-center align-items-center gap-3">
  
      <div class="d-flex align-items-center gap-2">
        <router-link 
          to="/Categorias/Ciencia" 
          class="text-decoration-none fw-bold" 
          style="color: #0FA6A6;"
        >
          Ciencia e innovación
        </router-link>
        <div class="vr"></div>
      </div>
  
      <div class="d-flex align-items-center gap-2">
        <router-link 
          to="/Categorias/Cultura" 
          class="text-decoration-none fw-bold" 
          style="color: #F23568;"
        >
          Cultura
        </router-link>
        <div class="vr"></div>
      </div>
  
      <div class="d-flex align-items-center gap-2">
        <router-link 
          to="/Categorias/Personajes" 
          class="text-decoration-none fw-bold" 
          style="color: #0FA6A6;"
        >
          Personajes
        </router-link>
        <div class="vr"></div>
      </div>
  
      <div class="d-flex align-items-center gap-2">
        <router-link 
          to="/Categorias/Ambiente" 
          class="text-decoration-none fw-bold" 
          style="color: #F23568;"
        >
          Ambiente, paz y convivencia
        </router-link>
        <div class="vr"></div>
      </div>
  
      <div class="d-flex align-items-center gap-2">
        <router-link 
          to="/Categorias/Emprendimiento" 
          class="text-decoration-none fw-bold" 
          style="color: #0FA6A6;"
        >
          Emprendimiento
        </router-link>
      </div>
  
    </div>
  </template>
  
  <script setup>
  // Nada que agregar aquí, por ahora.
  </script>
  
  <style scoped>
  /* Mejoramos la línea vertical para que sea más elegante */
  .vr {
    width: 2px;
    height: 20px;
    background-color: #ccc;
  }
  </style>
  