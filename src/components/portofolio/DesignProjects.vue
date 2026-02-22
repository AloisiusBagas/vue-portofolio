<template>
  <section id="portfolio" class="portfolio">
    <div class="container">
      <!-- Tabs -->
      <div class="portfolio-tabs d-flex justify-content-start">
        <button :class="{ active: activeTab === 'posters' }" @click="activeTab = 'posters'">
          Posters
        </button>
        <button :class="{ active: activeTab === 'instagram' }" @click="activeTab = 'instagram'">
          Social Media
        </button>
      </div>

      <!-- Portfolio Items with Swipe Gesture -->
      <div class="row portfolio-container">
        <div v-for="(item, index) in paginatedDesignItems" :key="activeTab + '-' + index"
          class="col-lg-4 col-md-6 portfolio-item" data-aos="zoom-in" data-aos-delay="200">
          <div class="portfolio-img">
            <img :src="item.image" class="img-fluid" :alt="item.title" />
          </div>
          <div class="portfolio-info">
            <div class="d-flex flex-row justify-content-between">
              <h4>{{ item.title }}</h4>
              <a href="#" @click.prevent="openFullscreen(item.image)">
                <i class="fa-solid fa-expand" style="color: white; cursor: pointer"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <nav v-if="totalPages > 1" class="mt-5 d-flex justify-content-center">
        <ul class="pagination custom-pagination">
          <li class="page-item" :class="{ disabled: currentPage === 1 }">
            <button class="page-link" @click="currentPage--" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </button>
          </li>
          <li v-for="page in totalPages" :key="page" class="page-item" :class="{ active: currentPage === page }">
            <button class="page-link" @click="currentPage = page">{{ page }}</button>
          </li>
          <li class="page-item" :class="{ disabled: currentPage === totalPages }">
            <button class="page-link" @click="currentPage++" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>

    <!-- Fullscreen Image Modal -->
    <div v-if="fullscreenImage" class="fullscreen-overlay" @click="closeFullscreen">
      <img :src="fullscreenImage" class="fullscreen-img" />
      <button class="close-btn" @click="closeFullscreen">&times;</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'

// Active tab state
const activeTab = ref('posters')
const currentPage = ref(1)
const itemsPerPage = 6

// Reset page when tab changes
watch(activeTab, () => {
  currentPage.value = 1
})

// Fullscreen image state
const fullscreenImage = ref<string | null>(null)

// Open fullscreen image
const openFullscreen = (image: string) => {
  fullscreenImage.value = image
}

// Close fullscreen image
const closeFullscreen = () => {
  fullscreenImage.value = null
}

// Close modal on "Esc" key press
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    closeFullscreen()
  }
}

// Add & remove event listener for Esc key
onMounted(() => window.addEventListener('keydown', handleKeydown))
onUnmounted(() => window.removeEventListener('keydown', handleKeydown))

// Portfolio items data
const portfolioItems = [
  { title: 'Company Visit (BNEC)', image: 'images/Portofolio/Poster/fix.jpg', category: 'posters' },
  {
    title: 'National English Olympic (BNEC)',
    image: 'images/Portofolio/Poster/poste+medarr3.jpg',
    category: 'posters'
  },
  {
    title: 'Seminar (BNEC)',
    image: 'images/Portofolio/Poster/posterfinal.jpg',
    category: 'posters'
  },
  {
    title: 'Seminar (BNEC)',
    image: 'images/Portofolio/Poster/Untitled-16.jpg',
    category: 'posters'
  },
  { title: 'Instagram 1', image: 'images/Portofolio/IG/binus1.jpg', category: 'instagram' },
  { title: 'Instagram 2', image: 'images/Portofolio/IG/binus2.jpg', category: 'instagram' },
  { title: 'Instagram 3', image: 'images/Portofolio/IG/bnec1.jpg', category: 'instagram' },
  { title: 'Instagram 4', image: 'images/Portofolio/IG/neo1.jpg', category: 'instagram' }
]

// Filter portfolio based on active tab
const filteredPortfolio = computed(() => {
  return portfolioItems.filter((item) => item.category === activeTab.value)
})

const totalPages = computed(() => Math.ceil(filteredPortfolio.value.length / itemsPerPage))

const paginatedDesignItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredPortfolio.value.slice(start, end)
})
</script>

<style scoped>
/* Tabs */
.portfolio-tabs {
  margin-bottom: 20px;
}

.portfolio-tabs button {
  background: none;
  border: none;
  font-size: 1.rem;
  font-weight: bold;
  padding: 10px 20px;
  cursor: pointer;
  transition: 0.3s;
  color: #555;
}

.portfolio-tabs button.active {
  color: var(--primary-orange-color);
  border-bottom: 2px solid var(--primary-orange-color);
}

/* Portfolio */
.portfolio .portfolio-item {
  position: relative;
  margin-bottom: 30px;
}

.portfolio .portfolio-item .portfolio-img {
  overflow: hidden;
}

.portfolio .portfolio-item .portfolio-img img {
  transition: all 0.8s ease-in-out;
}

.portfolio .portfolio-item .portfolio-info {
  opacity: 0;
  position: absolute;
  left: 15px;
  bottom: 0;
  right: 15px;
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
  padding: 10px 15px;
  transition: all ease-in-out 0.3s;
}

.portfolio .portfolio-item .portfolio-info h4 {
  font-size: 1rem;
  color: #fff;
  font-weight: 600;
  margin-bottom: 0;
}

.portfolio .portfolio-item:hover .portfolio-img img {
  transform: scale(1.2);
}

.portfolio .portfolio-item:hover .portfolio-info {
  opacity: 1;
}

/* Fullscreen Overlay */
.fullscreen-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.fullscreen-img {
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
}

.close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 2rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}

/* Pagination Styling */
:deep(.custom-pagination .page-link) {
  color: var(--text-color);
  background-color: var(--Background-color);
  border-color: var(--grey-color);
  transition: all 0.3s ease;
}

:deep(.custom-pagination .page-item.active .page-link) {
  background-color: var(--primary-orange-color);
  border-color: var(--primary-orange-color);
  color: #fff;
}

:deep(.custom-pagination .page-link:hover) {
  background-color: var(--primary-orange-color);
  border-color: var(--primary-orange-color);

  color: #fff;
}

:deep(.custom-pagination .page-item.disabled .page-link) {
  background-color: var(--Background-color);
  border-color: var(--grey-color);
  opacity: 0.5;
}
</style>
