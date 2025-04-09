/// <reference types="nuxt/schema" />
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    'animate.css/animate.min.css'
  ],

  plugins: [
    '~/plugins/bootstrap.client.ts'
  ],

  vite: {
    define: {
      'process.env': {}
    }
  }
})
