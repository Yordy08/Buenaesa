<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const nombre = ref('')
const email = ref('')
const password = ref('')
const router = useRouter()

const registrarUsuario = async () => {
  try {
    await $fetch('https://buenaesa-1.onrender.com/usuarios', {
      method: 'POST',
      body: {
        nombre: nombre.value,
        email: email.value,
        password: password.value
      }
    })

    alert('Usuario registrado correctamente')

    // Después de registrar, puedes enviarlo al login
    router.push('/login')
  } catch (error) {
    console.error(error)
    alert(error?.data?.error || 'Error al registrar usuario')
  }
}
</script>

<template>
  <form @submit.prevent="registrarUsuario">
    <div>
      <label>Nombre</label>
      <input v-model="nombre" type="text" placeholder="Tu nombre" required />
    </div>

    <div>
      <label>Email</label>
      <input v-model="email" type="email" placeholder="Tu email" required />
    </div>

    <div>
      <label>Contraseña</label>
      <input v-model="password" type="password" placeholder="Tu contraseña" required />
    </div>

    <button type="submit">Registrarse</button>
  </form>
</template>
