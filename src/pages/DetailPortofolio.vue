<template>
  <div class="project-detail-page">
    <section 
      class="hero-section text-center text-white d-flex align-items-center justify-content-center"
      :style="{ backgroundImage: `url(${project.heroImage})` }"
    >
      <div class="overlay"></div>
      <div class="container position-relative z-index-1">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <h1 class="display-4 fw-bold mb-3">{{ project.title }}</h1>
            <p class="lead mb-4">{{ project.subtitle }}</p>

            <div class="d-flex flex-wrap justify-content-center gap-2 mb-4">
              <span
                v-for="tech in project.tag"
                :key="tech"
                class="badge rounded-pill tech-pill"
              >
                {{ tech }}
              </span>
            </div>

            <div class="d-flex justify-content-center gap-3">
              <a v-if="project.liveLink" :href="project.liveLink" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg px-4">Live Demo</a>
              <a v-if="project.githubLink" :href="project.githubLink" target="_blank" rel="noopener noreferrer" class="btn btn-outline-light btn-lg px-4"
                >GitHub Repo</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding bg-white">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <h2 class="section-title">Project Overview</h2>
            <p class="text-muted lh-lg" v-html="project.description" style="white-space: pre-line"></p>
          </div>
          <div class="col-lg-4 offset-lg-1">
            <h5 class="fw-bold mb-3">Tech Stack</h5>
            <div class="d-flex flex-wrap gap-2">
              <div
                v-for="tech in project.detailedTech"
                :key="tech.name"
                class="tech-item d-flex align-items-center"
              >
                <i :class="tech.icon" class="me-2 text-primary"></i>
                <span>{{ tech.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding bg-light">
      <div class="container">
        <h2 class="section-title mb-5">Key Features</h2>
        <div class="row g-4">
          <div v-for="feature in project.features" :key="feature.title" class="col-md-4">
            <div class="card h-100 feature-card border-0 shadow-sm p-4">
              <div class="feature-icon-wrapper mb-3">
                <i :class="feature.icon"></i>
              </div>
              <h5 class="fw-bold">{{ feature.title }}</h5>
              <p class="text-muted small mb-0">{{ feature.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding bg-white">
      <div class="container">
        <h2 class="section-title mb-5 text-center">Project Gallery</h2>
        <div class="row g-4">
          <div v-for="(img, index) in project.gallery" :key="index" class="col-md-4 col-sm-6">
            <div class="gallery-item rounded-3 overflow-hidden shadow-sm position-relative">
              <img :src="img" class="img-fluid" alt="Gallery Image" />
              <div class="portfolio-info">
                <div class="d-flex flex-row justify-content-between align-items-center">
                  <h4 class="mb-0 text-white fs-6">Project Image {{ index + 1 }}</h4>
                  <a href="#" @click.prevent="openFullscreen(img)">
                <i class="fa-solid fa-expand" style="color: white; cursor: pointer"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Fullscreen Image Modal -->
    <div v-if="fullscreenImage" class="fullscreen-overlay" @click="closeFullscreen">
      <img :src="fullscreenImage" class="fullscreen-img" />
      <button class="close-btn" @click="closeFullscreen">&times;</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { projects } from '../data/projects'
import type { Project } from '../data/projects'

const route = useRoute()
// Find the project based on the route parameter 'id'
const project = computed<Project>(() => {
  const projectId = route.params.id as string
  return projects.find(p => p.id === projectId) || projects[0] as Project
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
</script>

<style scoped>
/* Custom Layout Styling */
.section-padding {
  padding: 80px 0;
}

.section-title {
  font-weight: 700;
  position: relative;
  margin-bottom: 30px;
}

/* Hero Styles */
.hero-section {
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8); /* Dark overlay for readability */
  z-index: 0;
}

.z-index-1 {
  position: relative;
  z-index: 1;
}

.tech-pill {
  background-color: rgba(255, 255, 255, 0.2);
  padding: 8px 16px;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

/* Feature Cards */
.feature-card {
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-10px);
}

.feature-icon-wrapper {
  width: 50px;
  height: 50px;
  background-color: #e7f1ff;
  color: #0d6efd;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  font-size: 1.5rem;
}

.tech-item {
  background: #f8f9fa;
  padding: 10px 15px;
  border-radius: 8px;
  width: 100%;
}

/* Gallery */
.gallery-item img {
  transition: transform 0.5s ease;
  width: 100%;
  cursor: pointer;
}

.gallery-item:hover img {
  transform: scale(1.05);
}

.portfolio-info {
  opacity: 0;
  position: absolute;
  left: 0;
  bottom: 0px;
  right: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
  padding: 10px 15px;
  transition: all ease-in-out 0.3s;
  border-radius: 4px;
}

.gallery-item:hover .portfolio-info {
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

/* Mobile Adjustments */
@media (max-width: 768px) {
  .hero-section {
    padding-top: 60px;
    min-height: auto;
  }
  .section-padding {
    padding: 50px 0;
  }
}
</style>
