<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'

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

    // Alerta de éxito
    await Swal.fire({
      icon: 'success',
      title: '¡Bienvenido!',
      text: 'Inicio de sesión exitoso',
      timer: 2000,
      showConfirmButton: false
    })

    localStorage.setItem('usuario', JSON.stringify(response.usuario))
    router.push('/')
  } catch (error) {
    console.error(error)

    // Alerta de error
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error?.data?.error || 'Error al iniciar sesión',
      confirmButtonColor: '#F27474'
    })
  }
}
</script>

<template>
 
  <div class="login-page">
    <div class="form-container animate__animated animate__fadeInDown">
      
      <h2>Iniciar Sesión</h2>
      <form @submit.prevent="iniciarSesion">
        <div class="input-group">
          <label>Email</label>
          <input v-model="email" type="email" placeholder="Tu email" required />
        </div>

        <div class="input-group">
          <label>Contraseña</label>
          <input v-model="password" type="password" placeholder="Tu contraseña" required />
        </div>

        <button type="submit" class="btn-submit">Entrar</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
@import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';

.login-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #74ebd5 0%, #ACB6E5 100%);
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-container {
  background: #fff;
  padding: 3rem;
  border-radius: 1rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
}

.input-group {
  margin-bottom: 1.5rem;
  text-align: left;
}

.input-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #333;
}

.input-group input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  transition: all 0.3s;
}

.input-group input:focus {
  border-color: #74ebd5;
  outline: none;
  box-shadow: 0 0 5px rgba(116, 235, 213, 0.5);
}

.btn-submit {
  width: 100%;
  padding: 0.75rem;
  background-color: #74ebd5;
  border: none;
  border-radius: 0.5rem;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-submit:hover {
  background-color: #66d3c2;
}
</style>
