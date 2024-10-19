<script setup lang="ts">
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
  AOS.init({
    duration: 1000, // durasi animasi dalam milidetik
    once: true // animasi hanya sekali saat scroll
  })
})
</script>

<template>
  <main>
    <!-- ======= Hero Section ======= -->
    <section id="hero" class="d-flex justify-content-center align-items-center vh-100">
      <div
        class="container d-flex flex-column justify-content-center align-items-center"
        data-aos="fade-up"
      >
        <h1 class="text-center text-white">Aloisius Bagas Wicaksono</h1>
        <h2 class="text-center">I'm a Professional Photographer In New York City</h2>

        <a href="#about" class="btn-scroll scrollto" title="Scroll Down">
          <i class="bx bx-chevrons-down"></i>
        </a>
      </div>
    </section>
    <!-- End Hero -->
    <!-- <div class="d-flex flex-row">
      <img src="../assets/images/FotoWisuda.jpg" width="450px" />
      a
    </div> -->
  </main>
</template>
