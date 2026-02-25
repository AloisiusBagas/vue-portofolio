<template>
  <section id="services" class="about py-5 px-4">
    <HeaderText text="My Services" data-aos="zoom-in-down" />

    <div class="d-flex flex-row justify-content-center gap-5 flex-wrap">
      <div v-for="(service, index) in listServices" :key="index">
        <div
          class="card col-md-3 col-sm-12 p-4 d-flex flex-column align-items-center text-center justify-content-center gap-3"
          :style="{ backgroundImage: `url(${service.backgroundImage})` }" data-aos="zoom-in-down">
          <div class="overlay"></div>
          <!-- Dark overlay on background -->
          <img :src="service.iconPath" width="60" height="60" class="content" />
          <p class="mt-2 content title">{{ service.title }}</p>

          <!-- Animated Box -->
          <div class="hover-box">
            <p class="hover-title">{{ service.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const HeaderText = defineAsyncComponent(() => import('../components/HeaderText.vue'))

const listServices = [
  {
    backgroundImage: '/images/website.webp',
    iconPath: '/icon/globe.svg',
    title: 'Web Development'
  },
  {
    backgroundImage: '/images/mobile.webp',
    iconPath: '/icon/mobile.svg',
    title: 'Mobile Development'
  },
  {
    backgroundImage: '/images/design.webp',
    iconPath: '/icon/design.svg',
    title: 'Graphic Design'
  }
]
</script>

<style scoped>
#services {
  background-color: var(--Secondary-background-color);
}

/* Basic Card Styling */
.card {
  --bs-card-bg: transparent;
  border: none;
  border-radius: 8px;
  min-width: 21.875rem;
  min-height: 14.375rem;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Overlay to darken background */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

/* Ensures icon stays above overlay */
.content {
  position: relative;
  z-index: 2;
}

/* Hover Box */
.hover-box {
  position: absolute;
  bottom: -100%;
  /* Starts off-screen */
  left: 0;
  width: 100%;
  height: 100%;
  background: orange;
  /* Light box effect */
  display: flex;
  align-items: center;
  justify-content: center;
  transition: bottom 0.5s ease-in-out;
  /* Smooth animation */
  z-index: 3;
  /* Ensures it's above everything */
}

/* Hover Title */
.hover-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
  text-transform: uppercase;
}

/* Show box on hover */
.card:hover .hover-box {
  bottom: 0;
  /* Moves the box up */
}
</style>
