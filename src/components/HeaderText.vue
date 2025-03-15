<template>
  <div class="header-container">
    <h2 class="header-text">{{ text }}</h2>
    <hr class="header-line" :style="{ width: text.length * 10 + 'px' }" />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.header-container {
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-bottom: 20px;
}

.header-text {
  font-size: 2rem;
  font-weight: 700;
  text-transform: uppercase;
}

.header-line {
  height: 4px;
  border: none;
  /* Remove default border */
  border-top: 4px solid var(--primary-orange-color);
  /* Stronger orange */
  width: 100%;
  opacity: 1 !important;
  margin: 8px auto;
  /* ✅ Center the HR */
}
</style>
