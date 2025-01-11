<!-- src/views/Home.vue -->
<template>
  <main>
    <HeroSection />
    <AboutMeSection />
    <PortfolioSection />
  </main>
</template>

<script setup lang="ts">
import HeroSection from '../components/HeroSection.vue'
import AboutMeSection from '../components/AboutMeSection.vue'
import PortfolioSection from '../components/PortfolioSection.vue'
</script>
