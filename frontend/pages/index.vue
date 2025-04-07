<template>
    <div>
      <h1>Front + Back funcionando 🎯</h1>
      <p>Mensaje del backend: {{ message }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const message = ref('Cargando...')
  
  onMounted(async () => {
    const res = await fetch('http://localhost:3001/')
    const data = await res.text()
    message.value = data
  })
  </script>
  