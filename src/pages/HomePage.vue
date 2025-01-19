<!-- src/views/Home.vue -->
<template>
  <main>
    <HeroSection />
    <AboutMeSection />
    <ResumeSection />
    <PortfolioSection />
  </main>
</template>

<script setup lang="ts">
import HeroSection from '../components/HeroSection.vue'
import AboutMeSection from '../components/AboutMeSection.vue'
import PortfolioSection from '../components/portofolio/PortfolioSection.vue'
import ResumeSection from '../components/ResumeSection.vue'
import { onMounted } from 'vue'
import AOS from 'aos'
onMounted(() => {
  AOS.init({
    duration: 1300,
    once: true,
    easing: 'ease-in-out',
    offset: 100
  })
})
</script>
