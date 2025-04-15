import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    'animate.css/animate.min.css'
  ],

  plugins: [
    '~/plugins/bootstrap.js',
    '~/plugins/smartsupp.js' // Agregar el plugin de SmartSupp
  ],

  runtimeConfig: {
    public: {
      apiBase: process.env.VITE_API_URL || 'https://buenaesa-1.onrender.com/'
    }
  },

  vite: {
    define: {
      'process.env': {}
    }
  }
})
