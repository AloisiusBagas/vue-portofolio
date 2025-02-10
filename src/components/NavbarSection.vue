<template>
  <nav class="navbar navbar-expand-lg navbar-dark custom-navbar fixed-top" :class="{ hidden: !showNavbar }">
    <a class="navbar-brand-web" href="#">MyApp</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" @click="toggleMenu">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse w-100" id="navbarNav" :class="{ 'menu-open': menuOpen }">
      <ul class="navbar-nav">
        <li class="nav-item" v-for="section in sections" :key="section.id" :class="{ active: isActive(section.id) }"
          @click="setActiveSection(section.id)">
          <a class="nav-link text-center" :href="'#' + section.id" v-if="section.label">{{
            section.label
            }}</a>
        </li>
        <a class="navbar-brand-mobile" href="#">MyApp</a>
      </ul>
    </div>
    <li class="nav-item align-items-center d-flex">
      <i class="fas fa-sun"></i>
      <!-- Default switch -->
      <div class="ms-2 form-check form-switch">
        <input class="form-check-input" type="checkbox" role="switch" id="themingSwitcher"
          @click="handleSwitchMode($event)" />
      </div>
      <i class="fas fa-moon"></i>
    </li>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, Component } from 'vue'
import { PropType } from 'vue'

const props = defineProps({
  sections: {
    type: Array as PropType<{ id: string; label?: string; component: Component }[]>,
    required: true
  },
  handleSwitchMode: {
    type: Function as PropType<(payload: MouseEvent) => void>,
    required: true
  }
})
const { sections } = props

const debounce = (func: Function, delay: number) => {
  let timeout: number
  return (...args: any[]) => {
    clearTimeout(timeout)
    timeout = window.setTimeout(() => func(...args), delay)
  }
}

const activeSection = ref('home')
const showNavbar = ref(true)
const menuOpen = ref(false) // Track menu state
let lastScrollY = 0

const isActive = (sectionId: string) => {
  return activeSection.value === sectionId
}

const setActiveSection = (sectionId: string) => {
  activeSection.value = sectionId
  const element = document.getElementById(sectionId)

  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  menuOpen.value = false // Close menu after selection (for mobile)
}

const handleScroll = () => {
  if (window.scrollY > lastScrollY) {
    showNavbar.value = false
    menuOpen.value = false
  } else {
    showNavbar.value = true
  }
  lastScrollY = window.scrollY
}

const updateActiveSection = () => {
  sections.forEach((section) => {
    const element = document.getElementById(section.id)
    if (element) {
      const rect = element.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        activeSection.value = section.id
      }
    }
  })
}

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const debouncedUpdateActiveSection = debounce(updateActiveSection, 50)

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('scroll', debouncedUpdateActiveSection)
  updateActiveSection()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('scroll', debouncedUpdateActiveSection)
})
</script>

<style scoped>
/* Custom navbar background color with opacity */
.custom-navbar {
  background-color: rgba(0, 0, 0, 0.8);
}

/* Optional: Adjust hover states */
.custom-navbar .navbar-nav .nav-item .nav-link:hover {
  color: #ff9800 !important;
}

.navbar {
  z-index: 1050;
  height: 70px;
  transition:
    transform 0.5s ease,
    top 0.5s ease;
  position: fixed;
  top: 0;
}

.navbar.hidden {
  transform: translateY(-100%);
  top: -70px;
}

.navbar-nav {
  display: flex;
  justify-content: center;
  width: 100%;
}

.navbar-nav .nav-item .nav-link:hover {
  color: #ff9800 !important;
}

.navbar-nav .nav-item.active .nav-link {
  color: #ff9800 !important;
}

.navbar-brand-mobile {
  display: none;
}

@media (max-width: 1000px) {
  .navbar-toggler {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  /* Background color when menu is open */
  .menu-open {
    background-color: rgba(0, 0, 0, 0.8);
    padding: 10px;
    margin-top: 62px;
  }

  .navbar-nav {
    flex-direction: column;
    text-align: center;
    padding: 10px 0;
  }

  .navbar-nav .nav-item {
    margin: 5px 0;
  }

  .navbar-brand-web {
    display: none;
  }

  .navbar-brand-mobile {
    display: block;
  }

  @media (max-width: 576px) {
    .navbar {
      height: 60px;
    }
  }
}
</style>
