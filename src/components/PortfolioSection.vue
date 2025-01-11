<!-- src/components/PortfolioSection.vue -->
<template>
  <section id="portfolio" class="portfolio">
    <div class="container">
      <h2 class="d-flex justify-content-center mb-2">Portfolio</h2>
      <ul class="filters d-flex justify-content-center">
        <li
          v-for="(filter, index) in filters"
          :key="index"
          :class="{ 'filter-active': selectedFilter === filter }"
          @click="setFilter(filter)"
          class="filter-item"
        >
          {{ filter }}
        </li>
      </ul>
      <!-- Conditional rendering of projects based on the selected filter -->
      <CodeProjects v-if="selectedFilter === 'Code'" />
      <DesignProjects v-if="selectedFilter === 'Design'" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CodeProjects from '../components/CodeProjects.vue'
import DesignProjects from '../components/DesignProjects.vue'

// Define filter categories
const filters = ['Code', 'Design']
const selectedFilter = ref('Code')

// Update the filter when a category is clicked
const setFilter = (filter: string) => {
  selectedFilter.value = filter
}
</script>

<style scoped>
.portfolio .filters {
  list-style: none;
  margin-bottom: 20px;
}

.portfolio .filter-item {
  cursor: pointer;
  display: inline-block;
  margin: 0 10px 10px 10px;
  font-size: 15px;
  font-weight: 600;
  line-height: 1;
  padding: 20px;
  text-transform: uppercase;
  color: #444444;
  transition: all 0.3s ease-in-out;
}

.portfolio .filter-item:hover,
.portfolio .filter-item.filter-active {
  color: #f3a200;
}

.portfolio .portfolio-items {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}
</style>
