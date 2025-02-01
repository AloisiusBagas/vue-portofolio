<template>
  <main :class="theme">
    <NavbarSection :sections="sections" />
    <template v-for="section in sections" :key="section.id">
      <section :id="section.id">
        <component :is="section.component" />
      </section>
    </template>
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

const sections = [
  { id: 'home', component: HeroSection },
  { id: 'aboutme', label: 'About Me', component: AboutMeSection },
  { id: 'resume', label: 'Resume', component: ResumeSection },
  { id: 'portofolio', label: 'Portofolio', component: PortfolioSection },
  { id: 'contact', label: 'Contact', component: ContactSection }
]
const theme = ref('light')
const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
onMounted(() => {
  // Delay AOS initialization
  setTimeout(() => {
    AOS.init({
      duration: 1000,
      once: true, // Animations will only trigger once
      easing: 'ease-in-out',
      offset: 100
    })
  }, 600)
})
</script>
