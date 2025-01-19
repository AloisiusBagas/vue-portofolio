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
</script>
