<template>
  <nav class="navbar navbar-expand-lg navbar-dark custom-navbar fixed-top" :class="{ hidden: !showNavbar }">
    <a class="navbar-brand-web" href="#">
      <img src="/MyName.png" alt="MyApp Logo" class="navbar-logo" />
    </a>
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
        <li class="nav-item align-items-center d-flex toggle-switch-mobile">
          <i class="fas fa-sun" :class="{ 'icon-on': !isDarkMode, 'icon-off': isDarkMode }"></i>
          <div class="ms-2 form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="themingSwitcher" :checked="isDarkMode"
              @click="handleSwitchMode($event)" />
          </div>
          <i class="fa-solid fa-moon" :class="{ 'icon-on': isDarkMode, 'icon-off': !isDarkMode }"></i>
        </li>
        <a class="navbar-brand-mobile" href="#">
          <img src="/MyName.png" alt="MyApp Logo" class="navbar-logo" />
        </a>
      </ul>
    </div>
    <li class="nav-item align-items-center d-flex toggle-switch-web">
      <i class="fas fa-sun" :class="{ 'icon-on': !isDarkMode, 'icon-off': isDarkMode }"></i>
      <div class="ms-2 form-check form-switch">
        <input class="form-check-input" type="checkbox" role="switch" id="themingSwitcher"
          @click="handleSwitchMode($event)" />
      </div>
      <i class="fa-solid fa-moon" :class="{ 'icon-on': isDarkMode, 'icon-off': !isDarkMode }"></i>
    </li>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, type Component } from 'vue'
import type { PropType } from 'vue'

const props = defineProps({
  sections: {
    type: Array as PropType<{ id: string; label?: string; component: Component }[]>,
    required: true
  },
  handleSwitchMode: {
    type: Function as PropType<(payload: MouseEvent) => void>,
    required: true
  },
  isDarkMode: {
    type: Boolean,
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
const handleClickOutside = (event: MouseEvent) => {
  const navbar = document.querySelector('.navbar') as HTMLElement;
  if (navbar && !navbar.contains(event.target as Node)) {
    showNavbar.value = false;
    menuOpen.value = false
  }
};
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('scroll', debouncedUpdateActiveSection)
  document.addEventListener('click', handleClickOutside);
  updateActiveSection()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('scroll', debouncedUpdateActiveSection)
  document.removeEventListener('click', handleClickOutside)
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

.toggle-switch-mobile {
  display: none !important;
}

@media (min-width: 1000px) {
  .custom-navbar {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
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
    margin-top: 3.875rem;
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

  .toggle-switch-web {
    display: none !important;
  }

  .toggle-switch-mobile {
    display: flex !important;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
    /* Add spacing between items */
  }

  @media (max-width: 576px) {
    .navbar {
      height: 60px;
    }
  }
}

.form-check-input {
  background-color: #fff;
  /* Background when off */
}

.form-check-input:checked {
  background-color: #151419;
  /* Background when on */
}

.icon-off {
  color: white;
}

.icon-on {
  color: #ffb727;
}
</style>
