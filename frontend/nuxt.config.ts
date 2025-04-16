import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },

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
  },

  // Configuración de SEO en Nuxt 3
  app: {
    head: {
      title: 'Buenaesa.co',
      meta: [
        { name: 'description', content: 'Buenaesa es una red informativa que promueve noticias positivas a nivel municipal y nacional, enfocándose en el cambio social, el empoderamiento de comunidades y la solidaridad.' },
        { name: 'keywords', content: 'noticias positivas, cambio social, solidaridad, noticias locales, noticias nacionales, Buenaesa, comunidad, desarrollo, liderazgo local, optimismo' },
        { name: 'author', content: 'Buenaesa' },
        { property: 'og:title', content: 'Buenaesa - Red Informativa de Noticias Positivas' },
        { property: 'og:description', content: 'Buenaesa se dedica a resaltar historias positivas que inspiran y promueven el cambio social, tanto a nivel municipal como nacional.' },
        { property: 'og:image', content: '/images/og-image.jpg' },  // Asegúrate de tener una imagen representativa
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://buenaesa.onrender.com' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Buenaesa - Red Informativa de Noticias Positivas' },
        { name: 'twitter:description', content: 'Noticias que inspiran el cambio social. Buenaesa es tu fuente de historias positivas a nivel municipal y nacional.' },
        { name: 'twitter:image', content: '/images/twitter-image.jpg' },  // También asegúrate de tener una imagen representativa
      ],
      link: [
        { rel: 'icon', href: '/images/rojo.png' }
        // Puedes añadir otros enlaces, como fuentes, etc.
      ]
    }
  }
})
