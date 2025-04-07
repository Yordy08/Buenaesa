

<script setup>
import { ref } from 'vue'

const titulo = ref('')
const descripcion = ref('')
const categoria = ref('')
const archivo = ref(null)

const manejarArchivo = (e) => {
  archivo.value = e.target.files[0]
}

const subirNoticia = async () => {
  const formData = new FormData()
  formData.append('titulo', titulo.value)
  formData.append('descripcion', descripcion.value)
  formData.append('categoria', categoria.value)
  formData.append('archivo', archivo.value)

  try {
    await $fetch('http://localhost:3001/api/noticias', {
      method: 'POST',
      body: formData,
    })
    alert('Noticia subida correctamente')
    titulo.value = ''
    descripcion.value = ''
    categoria.value = ''
    archivo.value = null
  } catch (error) {
    console.error(error)
    alert('Error al subir la noticia')
  }
}
</script>

<template>
  <form @submit.prevent="subirNoticia" enctype="multipart/form-data">
    <div>
      <label>Título</label>
      <input v-model="titulo" placeholder="Título" required />
    </div>

    <div>
      <label>Descripción</label>
      <textarea v-model="descripcion" placeholder="Descripción" required></textarea>
    </div>

    <div>
      <label>Categoría</label>
      <input v-model="categoria" placeholder="Categoría" required />
    </div>

    <div>
      <label>Archivo (Imagen o Video)</label>
      <input type="file" @change="manejarArchivo" required />
    </div>

    <button type="submit">Subir Noticia</button>
  </form>
</template>
