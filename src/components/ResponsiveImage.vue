<template>
  <picture>
    <!-- Modern Format: AVIF (Highest priority) -->
    <source
      v-if="srcAvif"
      :srcset="srcAvif"
      type="image/avif"
      :media="media"
    />
    <!-- Modern Format: WebP -->
    <source
      v-if="srcWebp"
      :srcset="srcWebp"
      type="image/webp"
      :media="media"
    />
    <!-- Fallback Format & Responsive srcset for Hero images -->
    <img
      :src="srcJpg"
      :srcset="srcset"
      :sizes="sizes"
      :alt="alt"
      :width="width"
      :height="height"
      :loading="loading"
      :class="imgClass"
      :style="imgStyle"
    />
  </picture>
</template>

<script setup lang="ts">
interface Props {
  // Source URLs
  srcJpg: string
  srcWebp?: string
  srcAvif?: string
  
  // Responsive attributes
  srcset?: string
  sizes?: string
  media?: string // e.g., "(min-width: 768px)" for art direction
  
  // Accessibility & Dimensions
  alt: string
  width: number | string // Explicit dimensions to prevent CLS
  height: number | string // Explicit dimensions to prevent CLS
  
  // Display Options
  loading?: 'lazy' | 'eager' // Native lazy loading
  imgClass?: string | object | Array<any>
  imgStyle?: string | object | Array<any>
}

withDefaults(defineProps<Props>(), {
  loading: 'lazy', // Defaults to lazy for images below the fold
  imgClass: '',
  imgStyle: ''
})
</script>

<style scoped>
/* Ensure images scale responsively while preventing layout shift */
img {
  max-width: 100%;
  height: auto;
  object-fit: cover;
}
</style>
