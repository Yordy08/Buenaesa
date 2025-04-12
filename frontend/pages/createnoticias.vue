<template>
  <div class="container">
    <!-- Overlay de cargando -->
    <div v-if="cargando" class="overlay-cargando">
      <div class="spinner"></div>
      <p>Creando noticia...</p>
    </div>

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

      <button
        type="submit"
        class="boton-enviar"
        :disabled="cargando"
      >
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
import { ref, onMounted, computed } from 'vue'
import Swal from 'sweetalert2'

const titulo = ref('')
const descripcion = ref('')
const categoria = ref('')
const archivo = ref(null)
const noticias = ref([])
const editando = ref(false)
const noticiaEditando = ref(null)
const busqueda = ref('')
const cargando = ref(false)

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
    Swal.fire('Error', 'No se pudieron cargar las noticias', 'error')
  }
}

const subirNoticia = async () => {
  cargando.value = true
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
      Swal.fire('Actualizado', 'La noticia se actualizó correctamente', 'success')
    } else {
      await $fetch('http://localhost:3001/api/noticias', {
        method: 'POST',
        body: formData,
      })
      Swal.fire('Creado', 'La noticia se creó correctamente', 'success')
    }
    limpiarFormulario()
    cargarNoticias()
  } catch (error) {
    console.error(error)
    Swal.fire('Error', 'Hubo un error al guardar la noticia', 'error')
  } finally {
    cargando.value = false
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
  const confirmacion = await Swal.fire({
    title: '¿Seguro que quieres eliminar esta noticia?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'Cancelar'
  })

  if (confirmacion.isConfirmed) {
    try {
      await $fetch(`http://localhost:3001/api/noticias/${id}`, {
        method: 'DELETE',
      })
      Swal.fire('Eliminado', 'La noticia ha sido eliminada', 'success')
      cargarNoticias()
    } catch (error) {
      console.error(error)
      Swal.fire('Error', 'No se pudo eliminar la noticia', 'error')
    }
  }
}

const limpiarFormulario = () => {
  titulo.value = ''
  descripcion.value = ''
  categoria.value = ''
  archivo.value = null
  noticiaEditando.value = null
  editando.value = false
}

const noticiasFiltradas = computed(() => {
  return noticias.value.filter(noticia =>
    noticia.titulo.toLowerCase().includes(busqueda.value.toLowerCase()) ||
    noticia.descripcion.toLowerCase().includes(busqueda.value.toLowerCase()) ||
    noticia.categoria.toLowerCase().includes(busqueda.value.toLowerCase())
  )
})
</script>

<style scoped>
.container {
  max-width: 900px;
  margin: auto;
  padding: 20px;
}

.titulo {
  text-align: center;
  margin-bottom: 20px;
}

.formulario input,
.formulario textarea,
.formulario select,
.input-busqueda {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
}

.boton-enviar {
  width: 100%;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 12px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.boton-enviar:disabled {
  background-color: #6c757d;
  cursor: not-allowed;
}

.tabla-container {
  overflow-x: auto;
  margin-top: 20px;
}

.tabla {
  width: 100%;
  border-collapse: collapse;
}

.tabla th, .tabla td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
}

.imagen-noticia {
  width: 100px;
  height: auto;
}

/* Botones de acciones */
.boton-editar, .boton-eliminar {
  margin: 2px;
  padding: 8px 12px;
  font-size: 14px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
}

.boton-editar {
  background-color: #ffc107;
  color: #000;
}

.boton-eliminar {
  background-color: #dc3545;
  color: #fff;
}

/* Overlay de cargando */
.overlay-cargando {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  color: white;
  font-size: 24px;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 6px solid #ccc;
  border-top-color: #007bff;
  border-radius: 50%;
  animation: girar 1s linear infinite;
  margin-bottom: 15px;
}

@keyframes girar {
  to {
    transform: rotate(360deg);
  }
}
</style>
