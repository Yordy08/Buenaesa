<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const router = useRouter()

const iniciarSesion = async () => {
  try {
    const response = await $fetch('http://localhost:3001/usuarios/login', {
      method: 'POST',
      body: {
        email: email.value,
        password: password.value
      }
    })

    // Si todo salió bien
    alert('Login exitoso')
    localStorage.setItem('usuario', JSON.stringify(response.usuario))

    // Redirigir (por ejemplo, a la página principal)
    router.push('/')
  } catch (error) {
    console.error(error)
    alert(error?.data?.error || 'Error al iniciar sesión')
  }
}
</script>

<template>
  <form @submit.prevent="iniciarSesion">
    <div>
      <label>Email</label>
      <input v-model="email" type="email" placeholder="Tu email" required />
    </div>

    <div>
      <label>Contraseña</label>
      <input v-model="password" type="password" placeholder="Tu contraseña" required />
    </div>

    <button type="submit">Iniciar sesión</button>
  </form>
</template>
