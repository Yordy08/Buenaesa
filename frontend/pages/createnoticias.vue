<template>
  <div class="container my-5">
    <h1 class="mb-4">Noticias</h1>

    <button class="btn btn-success mb-3" @click="abrirModalCrear">Crear Noticia</button>

    <table class="table table-striped">
      <thead>
        <tr>
          <th>Título</th>
          <th>Descripción</th>
          <th>Archivo</th>
          <th>Categoría</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="noticia in noticias" :key="noticia._id">
          <td>{{ noticia.titulo }}</td>
          <td>{{ noticia.descripcion }}</td>
          <td>
            <img v-if="noticia.archivo" :src="noticia.archivo" alt="Imagen" width="100">
          </td>
          <td>{{ noticia.categoria }}</td>
          <td>
            <button class="btn btn-primary btn-sm me-2" @click="abrirModalEditar(noticia)">Editar</button>
            <button class="btn btn-danger btn-sm" @click="eliminarNoticia(noticia._id)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal -->
    <div class="modal fade" id="modalNoticia" tabindex="-1" aria-labelledby="modalNoticiaLabel" aria-hidden="true" ref="modalRef">
      <div class="modal-dialog">
        <div class="modal-content">

          <div class="modal-header">
            <h5 class="modal-title" id="modalNoticiaLabel">
              {{ modo === 'crear' ? 'Crear Noticia' : 'Editar Noticia' }}
            </h5>
            <button type="button" class="btn-close" @click="cerrarModal" aria-label="Close"></button>
          </div>

          <div class="modal-body">
            <form @submit.prevent="guardarNoticia">
              <div class="mb-3">
                <label class="form-label">Título</label>
                <input type="text" class="form-control" v-model="noticiaActual.titulo" required>
              </div>

              <div class="mb-3">
                <label class="form-label">Descripción</label>
                <textarea class="form-control" v-model="noticiaActual.descripcion" required></textarea>
              </div>

              <div class="mb-3" v-if="modo === 'crear'">
                <label class="form-label">Archivo (Imagen)</label>
                <input type="file" class="form-control" @change="cargarArchivo">
              </div>

              <div class="mb-3">
                <label class="form-label">Categoría</label>
                <input type="text" class="form-control" v-model="noticiaActual.categoria" required>
              </div>

              <div class="text-end">
                <button type="button" class="btn btn-secondary me-2" @click="cerrarModal">Cancelar</button>
                <button type="submit" class="btn btn-primary">
                  {{ modo === 'crear' ? 'Crear' : 'Actualizar' }}
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const noticias = ref([])
const modo = ref('crear') // 'crear' o 'editar'
const noticiaActual = ref({})
const archivoSeleccionado = ref(null)
const modalNoticia = ref(null)

onMounted(() => {
  fetchNoticias()
})

async function fetchNoticias() {
  const res = await fetch('http://localhost:3001/api/noticias')
  noticias.value = await res.json()
}

function abrirModalCrear() {
  modo.value = 'crear'
  noticiaActual.value = { titulo: '', descripcion: '', categoria: '' }
  archivoSeleccionado.value = null
  const modal = new bootstrap.Modal(modalNoticia.value)
  modal.show()
}

function abrirModalEditar(noticia) {
  modo.value = 'editar'
  noticiaActual.value = { ...noticia } // Copiamos
  archivoSeleccionado.value = null
  const modal = new bootstrap.Modal(modalNoticia.value)
  modal.show()
}

function cerrarModal() {
  const modal = bootstrap.Modal.getInstance(modalNoticia.value)
  modal.hide()
}

function cargarArchivo(event) {
  archivoSeleccionado.value = event.target.files[0]
}

async function guardarNoticia() {
  const formData = new FormData()
  formData.append('titulo', noticiaActual.value.titulo)
  formData.append('descripcion', noticiaActual.value.descripcion)
  formData.append('categoria', noticiaActual.value.categoria)
  if (archivoSeleccionado.value) {
    formData.append('archivo', archivoSeleccionado.value)
  }

  if (modo.value === 'crear') {
    await fetch('http://localhost:3001/api/noticias', {
      method: 'POST',
      body: formData
    })
  } else {
    await fetch(`http://localhost:3001/api/noticias/${noticiaActual.value._id}`, {
      method: 'PUT',
      body: formData
    })
  }

  cerrarModal()
  fetchNoticias()
}

async function eliminarNoticia(id) {
  if (confirm('¿Seguro que quieres eliminar esta noticia?')) {
    await fetch(`http://localhost:3001/api/noticias/${id}`, { method: 'DELETE' })
    fetchNoticias()
  }
}
</script>
