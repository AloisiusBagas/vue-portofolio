<template>
  <main :class="theme">
    <NavbarSection :sections="sections" :handleSwitchMode="toggleTheme" :isDarkMode="theme === 'dark'" />
    <template v-for="section in sections" :key="section.id">
      <section :id="section.id" :aria-label="section.label || section.id">
        <component :is="section.component" />
      </section>
    </template>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, defineAsyncComponent } from 'vue'
import AOS from 'aos'

// Navbar & hero are above the fold: load them eagerly so the first paint
// doesn't wait for extra async chunks. Sections below stay lazy.
import NavbarSection from '../components/NavbarSection.vue'
import HeroSection from '../components/HeroSection.vue'
const AboutMeSection = defineAsyncComponent(() => import('../components/AboutMeSection.vue'))
const ResumeSection = defineAsyncComponent(() => import('../components/ResumeSection.vue'))
const ServiceSection = defineAsyncComponent(() => import('../components/ServiceSection.vue'))
const PortfolioSection = defineAsyncComponent(
  () => import('../components/portofolio/PortfolioSection.vue')
)
const ContactSection = defineAsyncComponent(() => import('../components/ContactSection.vue'))
const FooterSection = defineAsyncComponent(() => import('../components/footerSection.vue'))

const sections = [
  { id: 'home', component: HeroSection },
  { id: 'aboutme', label: 'About Me', component: AboutMeSection },
  { id: 'resume', label: 'Resume', component: ResumeSection },
  { id: 'services', label: 'Services', component: ServiceSection },
  { id: 'portofolio', label: 'Portofolio', component: PortfolioSection },
  { id: 'contact', label: 'Contact', component: ContactSection },
  { id: 'footer', component: FooterSection }
]
const theme = ref('light')
const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
onMounted(() => {
  setTimeout(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: 'ease-out-cubic',
      offset: 100,
      disable: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
    })
  }, 600)
})
</script>
