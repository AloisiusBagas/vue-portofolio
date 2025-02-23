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
      <div
        class="row portfolio-container"
        @touchstart="startSwipe"
        @touchend="endSwipe"
        @mousedown="startSwipe"
        @mouseup="endSwipe"
      >
        <div
          v-for="(item, index) in filteredPortfolio"
          :key="activeTab + '-' + index"
          class="col-lg-4 col-md-6 portfolio-item"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
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
    </div>

    <!-- Fullscreen Image Modal -->
    <div v-if="fullscreenImage" class="fullscreen-overlay" @click="closeFullscreen">
      <img :src="fullscreenImage" class="fullscreen-img" />
      <button class="close-btn" @click="closeFullscreen">&times;</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

// Active tab state
const activeTab = ref('posters')

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

// Swipe tracking
let touchStartX = 0
let touchEndX = 0

// Handle swipe start
const startSwipe = (event: TouchEvent | MouseEvent) => {
  if ('touches' in event) {
    touchStartX = event.touches[0].clientX // For touch
  } else {
    touchStartX = event.clientX // For mouse drag
  }
}

// Handle swipe end
const endSwipe = (event: TouchEvent | MouseEvent) => {
  if ('changedTouches' in event) {
    touchEndX = event.changedTouches[0].clientX // For touch
  } else {
    touchEndX = event.clientX // For mouse drag
  }

  const swipeDistance = touchEndX - touchStartX

  if (swipeDistance < -50 && activeTab.value === 'posters') {
    activeTab.value = 'instagram'
  } else if (swipeDistance > 50 && activeTab.value === 'instagram') {
    activeTab.value = 'posters'
  }
}

// Portfolio items data
const portfolioItems = [
  { title: 'App 1', image: 'images/Portofolio/Poster/fix.jpg', category: 'posters' },
  { title: 'Web 3', image: 'images/Portofolio/Poster/poste+medarr3.jpg', category: 'posters' },
  { title: 'App 2', image: 'images/Portofolio/Poster/posterfinal.jpg', category: 'posters' },
  { title: 'Card 2', image: 'images/Portofolio/Poster/Untitled-16.jpg', category: 'posters' },
  { title: 'Instagram 1', image: 'images/Portofolio/IG/binus1.jpg', category: 'instagram' },
  { title: 'Instagram 2', image: 'images/Portofolio/IG/binus2.jpg', category: 'instagram' },
  { title: 'Instagram 3', image: 'images/Portofolio/IG/bnec1.jpg', category: 'instagram' },
  { title: 'Instagram 4', image: 'images/Portofolio/IG/neo1.jpg', category: 'instagram' }
]

// Filter portfolio based on active tab
const filteredPortfolio = computed(() => {
  return portfolioItems.filter((item) => item.category === activeTab.value)
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
  font-size: 18px;
  font-weight: bold;
  padding: 10px 20px;
  cursor: pointer;
  transition: 0.3s;
  color: #555;
}

.portfolio-tabs button.active {
  color: #ffc041;
  border-bottom: 2px solid #ffc041;
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
  font-size: 18px;
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
  font-size: 30px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}
</style>
