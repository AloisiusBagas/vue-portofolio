<template>
  <section id="hero" class="d-flex justify-content-center align-items-center">
    <div
      class="container d-flex flex-column justify-content-center align-items-center hero-container"
      data-aos="fade-up"
    >
      <h2 style="color: #ffbd39">Hello! I am</h2>
      <h1 class="text-center">Aloisius Bagas Wicaksono</h1>
      <div class="d-flex flex-row align-items-center">
        <h2 class="me-2 mb-0">I'm</h2>

        <Typewriter
          :text="[
            'a software engineer',
            'a Web Developer',
            'a Mobile Developer',
            'a Graphic Designer'
          ]"
          :speed="100"
          :delayBetweenTexts="1500"
        />
      </div>

      <a href="#about" class="btn-scroll scrollto mt-5" title="Scroll Down">
        <i class="bx bx-chevrons-down"></i>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import Typewriter from './Typewriter.vue'
</script>
