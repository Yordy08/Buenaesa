import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    'animate.css/animate.min.css',
    '@/assets/css/styles.css'  // 👈 aquí se importa tu estilo global
  ],
  

  plugins: [
    '~/plugins/bootstrap.js',
    '~/plugins/smartsupp.js' // Plugin de SmartSupp
  ],

 
  

  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE || 'https://buenaesa-1.onrender.com'
    }
  },

  vite: {
    define: {
      'process.env': {}
    }
  }
})
