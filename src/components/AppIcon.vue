<template>
  <span class="app-icon" aria-hidden="true" v-html="svg"></span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// Bundles only the SVGs we copied into assets/icons (no icon-font dependency)
const icons = import.meta.glob('../assets/icons/**/*.svg', {
  query: '?raw',
  import: 'default',
  eager: true
}) as Record<string, string>

const props = defineProps<{
  // Accepts the FontAwesome/Boxicons class syntax used across the app,
  // e.g. "fa-solid fa-star", "fa-brands fa-linkedin", "bx bx-download"
  icon: string
}>()

const svg = computed(() => {
  const parts = props.icon.trim().split(/\s+/)
  const last = parts[parts.length - 1] ?? ''
  const name = last.replace(/^(fa-|bxs-|bx-)/, '')

  let style = 'solid'
  if (parts.includes('fa-brands') || parts.includes('fab')) style = 'brands'
  else if (parts.includes('fa-regular') || parts.includes('far')) style = 'regular'
  else if (parts[0]?.startsWith('bx')) style = 'bx'

  return icons[`../assets/icons/${style}/${name}.svg`] ?? ''
})
</script>

<style scoped>
.app-icon {
  display: inline-flex;
  width: 1em;
  height: 1em;
  vertical-align: -0.125em;
}

.app-icon :deep(svg) {
  width: 100%;
  height: 100%;
  fill: currentColor;
}
</style>
