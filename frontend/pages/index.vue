<template>
  <div>
    <!-- NAVBAR -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
      <div class="container">
        <a class="navbar-brand fw-bold text-primary" href="#">Buenaesa<span class="text-dark">.com</span></a>
        <button class="navbar-toggler" type="button" @click="toggleMenu">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div :class="['collapse navbar-collapse', { show: menuOpen }]" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link active" href="#">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#secciones">Noticias</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Tendencias</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- HERO -->
    <section class="pt-5" style="background: linear-gradient(to right, #0062E6, #33AEFF); height: 90vh; display: flex; align-items: center;">
      <div class="container text-center text-white">
        <h1 class="display-4 fw-bold animate__animated animate__fadeInDown">Bienvenido a Buenaesa.com</h1>
        <p class="lead animate__animated animate__fadeInUp animate__delay-1s">Noticias que inspiran.</p>
        <a href="#secciones" class="btn btn-light btn-lg mt-4 animate__animated animate__fadeInUp animate__delay-2s">Explorar Noticias</a>
      </div>
    </section>

    <!-- SECCIONES -->
    <section id="secciones" class="py-5">
      <div class="container">
        <h2 class="text-center mb-5">Últimas Noticias</h2>

        <div v-for="(seccion, idx) in secciones" :key="idx" class="mb-5">
          <h3 class="text-primary mb-3">{{ seccion.nombre }}</h3>

          <swiper
            :slides-per-view="1"
            :space-between="20"
            :breakpoints="{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }"
            navigation
            pagination
            class="mySwiper"
          >
            <swiper-slide v-for="(noticia, idy) in seccion.noticias" :key="idy">
              <div class="card h-100 shadow-sm">
                <img :src="noticia.imagen" class="card-img-top" alt="Noticia imagen" style="height: 200px; object-fit: cover;">
                <div class="card-body d-flex flex-column">
                  <h5 class="card-title">{{ noticia.titulo }}</h5>
                  <p class="card-text">{{ noticia.descripcion }}</p>
                  <a href="#" class="btn btn-primary mt-auto">Leer más</a>
                </div>
              </div>
            </swiper-slide>
          </swiper>

        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const menuOpen = ref(false);
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const secciones = ref([
  {
    nombre: "Emprendimiento",
    noticias: Array.from({ length: 6 }).map((_, i) => ({
      titulo: `Emprendimiento ${i + 1}`,
      descripcion: "Descripción breve del emprendimiento.",
      imagen: "https://via.placeholder.com/400x200.png?text=Emprendimiento"
    })),
  },
  {
    nombre: "Ciencia e Innovación",
    noticias: Array.from({ length: 6 }).map((_, i) => ({
      titulo: `Ciencia e Innovación ${i + 1}`,
      descripcion: "Descripción breve de innovación científica.",
      imagen: "https://via.placeholder.com/400x200.png?text=Ciencia"
    })),
  },
  {
    nombre: "Cultural",
    noticias: Array.from({ length: 6 }).map((_, i) => ({
      titulo: `Cultural ${i + 1}`,
      descripcion: "Descripción breve sobre cultura.",
      imagen: "https://via.placeholder.com/400x200.png?text=Cultural"
    })),
  },
  {
    nombre: "Personajes",
    noticias: Array.from({ length: 6 }).map((_, i) => ({
      titulo: `Personaje ${i + 1}`,
      descripcion: "Descripción breve de personajes destacados.",
      imagen: "https://via.placeholder.com/400x200.png?text=Personajes"
    })),
  },
  {
    nombre: "Ambiente, Paz y Convivencia",
    noticias: Array.from({ length: 6 }).map((_, i) => ({
      titulo: `Ambiente y Paz ${i + 1}`,
      descripcion: "Descripción breve sobre ambiente y convivencia.",
      imagen: "https://via.placeholder.com/400x200.png?text=Ambiente+Paz"
    })),
  }
]);
</script>

<style scoped>
/* Puedes agregar estilos personalizados si quieres */
.swiper {
  padding-bottom: 40px;
}
.swiper-button-next,
.swiper-button-prev {
  color: #0062E6;
}
.swiper-pagination-bullet-active {
  background: #0062E6;
}
</style>
