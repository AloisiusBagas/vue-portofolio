<template>
  <main :class="theme">
    <NavbarSection />
    <HeroSection />
    <AboutMeSection />
    <ResumeSection />
    <PortfolioSection />
    <ContactSection />
    <!-- Theme Toggle Button on the right -->
    <button @click="toggleTheme" class="btn btn-warning">
      Switch to {{ theme === 'light' ? 'Dark' : 'Light' }} Mode
    </button>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, defineAsyncComponent } from 'vue'
import AOS from 'aos'

// Lazy-load components
const NavbarSection = defineAsyncComponent(() => import('../components/NavbarSection.vue'))
const HeroSection = defineAsyncComponent(() => import('../components/HeroSection.vue'))
const AboutMeSection = defineAsyncComponent(() => import('../components/AboutMeSection.vue'))
const PortfolioSection = defineAsyncComponent(
  () => import('../components/portofolio/PortfolioSection.vue')
)
const ResumeSection = defineAsyncComponent(() => import('../components/ResumeSection.vue'))
const ContactSection = defineAsyncComponent(() => import('../components/ContactSection.vue'))

const theme = ref('light')
const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}

onMounted(() => {
  AOS.init({
    duration: 1300,
    once: true,
    easing: 'ease-in-out',
    offset: 100
  })
})
</script>
