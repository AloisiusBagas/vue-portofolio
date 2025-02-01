<template>
  <div class="row g-4">
    <div v-for="item in mappedItems" :key="item.id" class="col-12 col-md-6">
      <div class="card mb-3 h-100 custom-card" data-aos="zoom-in">
        <div class="row g-0 h-100">
          <div class="green-container w-100 h-10-sm h-100-md"></div>
          <div class="col">
            <div class="card-body">
              <h5 class="card-title">{{ item.name }}</h5>
              <p class="card-text">
                {{ item.description }}
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated {{ item.updatedAt }}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue'
import { usePortofolioStore } from '../../stores/portofolioStore'

export default defineComponent({
  setup() {
    const portofolioStore = usePortofolioStore()
    onMounted(() => {
      if (portofolioStore.items.length === 0) {
        portofolioStore.fetchItems()
      }
    })
    const mappedItems = computed(() => {
      return portofolioStore.items.map((repo) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description || 'No description provided',
        url: repo.html_url,
        language: repo.language || 'Unknown',
        createdAt: new Date(repo.created_at).toLocaleDateString(),
        updatedAt: new Date(repo.updated_at).toLocaleDateString()
      }))
    })
    return {
      items: portofolioStore.items,
      mappedItems,
      loading: portofolioStore.loading,
      error: portofolioStore.error
    }
  }
})
</script>

<style scoped>
.custom-card {
  border-radius: 8px;
  overflow: hidden;
  /* Ensures child elements like green container don't overflow */
}

/* Common green container styles */
.green-container {
  background-color: green;
  display: block;
}

/* Small screens: height 10px */
@media (max-width: 767.98px) {
  .h-10-sm {
    height: 15px !important;
  }
}

/* Medium and larger screens: width 10px */
@media (min-width: 768px) {
  .h-100-md {
    width: 15px !important;
    height: 100%;
  }
}
</style>
