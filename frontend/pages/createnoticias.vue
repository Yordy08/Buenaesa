<template>
  <div class="container">
    <h1 class="titulo">Gestión de Noticias</h1>

  

    <!-- Formulario de noticias -->
    <form @submit.prevent="subirNoticia" class="formulario">
      <input type="text" v-model="titulo" placeholder="Título" required />
      <textarea v-model="descripcion" placeholder="Descripción" required></textarea>
      
      <select v-model="categoria" required>
        <option value="" disabled selected>Selecciona una categoría</option>
        <option value="Deportes">Deportes</option>
        <option value="Tecnología">Tecnología</option>
        <option value="Política">Política</option>
        <option value="Entretenimiento">Entretenimiento</option>
        <option value="Internacional">Internacional</option>
      </select>

      <input type="file" @change="manejarArchivo" />

      <button type="submit" class="boton-enviar">
        {{ editando ? 'Actualizar Noticia' : 'Crear Noticia' }}
      </button>
    </form>

    <br>

      <!-- Buscador -->
      <input
      type="text"
      v-model="busqueda"
      placeholder="Buscar noticias..."
      class="input-busqueda"
    />

    <!-- Tabla de noticias -->
    <div class="tabla-container">
      <table class="tabla">
        <thead>
          <tr>
            <th>Título</th>
            <th>Descripción</th>
            <th>Categoría</th>
            <th>Imagen</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="noticia in noticiasFiltradas" :key="noticia._id">
            <td>{{ noticia.titulo }}</td>
            <td>{{ noticia.descripcion }}</td>
            <td>{{ noticia.categoria }}</td>
            <td>
              <img v-if="noticia.archivo" :src="noticia.archivo" class="imagen-noticia" />
            </td>
            <td>
              <button class="boton-editar" @click="editarNoticia(noticia)">Editar</button>
              <button class="boton-eliminar" @click="eliminarNoticia(noticia._id)">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const titulo = ref('')
const descripcion = ref('')
const categoria = ref('')
const archivo = ref(null)
const noticias = ref([])
const editando = ref(false)
const noticiaEditando = ref(null)
const busqueda = ref('') // <- Buscador

const manejarArchivo = (e) => {
  archivo.value = e.target.files[0]
}

onMounted(() => {
  cargarNoticias()
})

const cargarNoticias = async () => {
  try {
    const data = await $fetch('http://localhost:3001/api/noticias')
    noticias.value = data
  } catch (error) {
    console.error(error)
  }
}

const subirNoticia = async () => {
  const formData = new FormData()
  formData.append('titulo', titulo.value)
  formData.append('descripcion', descripcion.value)
  formData.append('categoria', categoria.value)
  if (archivo.value) {
    formData.append('archivo', archivo.value)
  }

  try {
    if (editando.value) {
      await $fetch(`http://localhost:3001/api/noticias/${noticiaEditando.value._id}`, {
        method: 'PUT',
        body: formData,
      })
      alert('Noticia actualizada correctamente')
    } else {
      await $fetch('http://localhost:3001/api/noticias', {
        method: 'POST',
        body: formData,
      })
      alert('Noticia creada correctamente')
    }
    limpiarFormulario()
    cargarNoticias()
  } catch (error) {
    console.error(error)
    alert('Error al guardar la noticia')
  }
}

const editarNoticia = (noticia) => {
  titulo.value = noticia.titulo
  descripcion.value = noticia.descripcion
  categoria.value = noticia.categoria
  noticiaEditando.value = noticia
  editando.value = true
}

const eliminarNoticia = async (id) => {
  if (confirm('¿Seguro que quieres eliminar esta noticia?')) {
    try {
      await $fetch(`http://localhost:3001/api/noticias/${id}`, {
        method: 'DELETE',
      })
      alert('Noticia eliminada')
      cargarNoticias()
    } catch (error) {
      console.error(error)
      alert('Error al eliminar la noticia')
    }
  }
}

const limpiarFormulario = () => {
  titulo.value = ''
  descripcion.value = ''
  categoria.value = ''
  archivo.value = null
  editando.value = false
  noticiaEditando.value = null
}

// Computed para filtrar noticias
const noticiasFiltradas = computed(() => {
  if (!busqueda.value.trim()) {
    return noticias.value
  }
  return noticias.value.filter((n) =>
    n.titulo.toLowerCase().includes(busqueda.value.toLowerCase()) ||
    n.descripcion.toLowerCase().includes(busqueda.value.toLowerCase()) ||
    n.categoria.toLowerCase().includes(busqueda.value.toLowerCase())
  )
})
</script>

<style scoped>
.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}

.titulo {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 30px;
}

.input-busqueda {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 10px;
}

.formulario {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 15px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.formulario input,
.formulario textarea,
.formulario select {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
}

.boton-enviar {
  background-color: #28a745;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.1rem;
}

.tabla-container {
  overflow-x: auto;
}

.tabla {
  width: 100%;
  border-collapse: collapse;
}

.tabla th,
.tabla td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
}

.tabla th {
  background-color: #343a40;
  color: white;
}

.imagen-noticia {
  width: 100px;
  height: auto;
  border-radius: 8px;
}

.boton-editar {
  background-color: #007bff;
  color: white;
  padding: 5px 10px;
  margin: 2px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.boton-eliminar {
  background-color: #dc3545;
  color: white;
  padding: 5px 10px;
  margin: 2px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
</style>
