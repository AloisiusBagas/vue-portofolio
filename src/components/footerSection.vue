<template>
  <footer class="footer">
    <div class="container">
      <div class="d-flex flex-column align-items-center gap-2">
        <p>© 2025 Aloisius Bagas Wicaksono. All rights reserved.</p>
        <p>
          📩 Interested in working together? Contact me at
          <a href="mailto:waloisiusbagas@gmail.com" class="text-link">waloisiusbagas@gmail.com</a>
        </p>
        <div class="d-flex flex-row gap-3">
          <div v-for="(media, index) in socialMedia" :key="index">
            <a :href="media.path" target="_blank" rel="noopener noreferrer" :aria-label="media.label">
              <i :class="['icon', media.icon]" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const socialMedia = ref([
  { icon: 'fa-brands fa-linkedin', path: 'https://www.linkedin.com/in/aloisiusbagas/', label: 'LinkedIn Profile' },
  { icon: 'fa-brands fa-square-github', path: 'https://github.com/AloisiusBagas', label: 'GitHub Profile' },
  { icon: 'fa-brands fa-square-behance', path: 'https://www.behance.net/AloisiusBagas', label: 'Behance Portfolio' },
  { icon: 'fa-brands fa-instagram', path: 'https://www.instagram.com/aloisiusbagas_', label: 'Instagram Profile' }
])
</script>

<style scoped>
.footer {
  background-color: var(--dark-grey-color);
  color: white;
  padding: 20px 0;
  text-align: center;
}

.container {
  margin: 0 auto;
}

.icon {
  font-size: 24px;
  color: white;
  transition: color 0.3s ease;
}

.icon:hover {
  color: var(--primary-orange-color);
}

a {
  text-decoration: none;
}

.text-link {
  color: var(--primary-orange-color);
}
</style>
