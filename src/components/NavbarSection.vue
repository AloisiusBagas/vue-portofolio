<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-black bg-opacity-50 fixed-top" :class="{ hidden: !showNavbar }">
    <a class="navbar-brand" href="#">MyApp</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse w-100" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item" v-for="section in sections" :key="section.id" :class="{ active: isActive(section.id) }"
          @click="setActiveSection(section.id)">
          <a class="nav-link text-center" :href="'#' + section.id">{{ section.label }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, Component } from 'vue'
import { PropType } from 'vue';

const props = defineProps({
  sections: {
    type: Array as PropType<{ id: string; label?: string; component: Component }[]>,
    required: true,
  },
});
const { sections } = props;

const debounce = (func: Function, delay: number) => {
  let timeout: number;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = window.setTimeout(() => func(...args), delay);
  };
};


const activeSection = ref('home')
const showNavbar = ref(true)
let lastScrollY = 0

const isActive = (sectionId: string) => {
  return activeSection.value === sectionId
}

const setActiveSection = (sectionId: string) => {
  activeSection.value = sectionId;
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};


const handleScroll = () => {
  if (window.scrollY > lastScrollY) {
    // Scrolling down
    showNavbar.value = false
  } else {
    // Scrolling up
    showNavbar.value = true
  }
  lastScrollY = window.scrollY
}

const updateActiveSection = () => {
  sections.forEach((section) => {
    const element = document.getElementById(section.id);
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        activeSection.value = section.id;
      }
    }
  });
};




const debouncedUpdateActiveSection = debounce(updateActiveSection, 50);

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('scroll', debouncedUpdateActiveSection);
  updateActiveSection(); // Initialize active section
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('scroll', debouncedUpdateActiveSection);
});

</script>

<style scoped>
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

@media (max-width: 768px) {
  .navbar-dark .navbar-nav .nav-link {
    color: rgba(255, 255, 255, 0.7);
  }

  .navbar-nav .nav-item .nav-link:hover {
    color: #ff9800 !important;
  }

  .navbar-nav .nav-item.active .nav-link {
    color: #ff9800 !important;
  }

  .navbar-brand {
    display: none;
  }

  @media (max-width: 576px) {
    .navbar {
      height: 60px;
    }

    .navbar-nav {
      flex-direction: column;
    }

    .navbar-nav .nav-item {
      margin: 5px 0;
    }
  }

}
</style>
