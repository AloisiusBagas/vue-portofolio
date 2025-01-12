<!-- src/components/PortfolioSection.vue -->
<template>
  <section id="portfolio" class="portfolio">
    <div class="container">
      <!-- Portfolio items grid -->
      <div class="row portfolio-container">
        <div
          v-for="(item, index) in portfolioItems"
          :key="index"
          class="col-lg-4 col-md-6 portfolio-item"
        >
          <div class="portfolio-img">
            <img :src="item.image" class="img-fluid" :alt="item.title" />
          </div>
          <div class="portfolio-info">
            <h4>{{ item.title }}</h4>
            <a
              :href="item.image"
              data-gallery="portfolioGallery"
              class="portfolio-lightbox preview-link"
              :title="item.title"
            >
              <i class="bx bx-plus"></i>
            </a>
            <a href="#" target="_blank" class="details-link" :title="item.title + ' More Details'">
              <i class="bx bx-link"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Portfolio items data
const portfolioItems = [
  {
    title: 'App 1',
    image: 'images/Portofolio/Poster/fix.jpg'
  },
  {
    title: 'Web 3',
    image: 'images/Portofolio/Poster/fix.jpg'
  },
  {
    title: 'App 2',
    image: 'images/Portofolio/Poster/fix.jpg'
  },
  {
    title: 'Card 2',
    image: 'images/Portofolio/Poster/fix.jpg'
  }
]
</script>

<style scoped>
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
  z-index: 10; /* Ensure it’s on top */
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

.portfolio .portfolio-item .portfolio-info p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  margin-bottom: 0;
}

.portfolio .portfolio-item .portfolio-info .preview-link,
.portfolio .portfolio-item .portfolio-info .details-link {
  position: absolute;
  right: 40px;
  font-size: 24px;
  top: calc(50% - 18px);
  color: #fff;
  transition: 0.3s;
}

.portfolio .portfolio-item .portfolio-info .preview-link:hover,
.portfolio .portfolio-item .portfolio-info .details-link:hover {
  color: #ffc041;
}

.portfolio .portfolio-item .portfolio-info .details-link {
  right: 10px;
}

.portfolio .portfolio-item:hover .portfolio-img img {
  transform: scale(1.2);
}

.portfolio .portfolio-item:hover .portfolio-info {
  opacity: 1;
}
</style>
