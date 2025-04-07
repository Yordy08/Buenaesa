// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  css: [
    'bootstrap/dist/css/bootstrap.min.css',    // Bootstrap CSS
    'animate.css/animate.min.css'               // Animate.css (opcional para animaciones)
  ],

  vite: {
    define: {
      'process.env': {} // Esto soluciona algunos warnings de Bootstrap JS en Vite
    }
  }
})
