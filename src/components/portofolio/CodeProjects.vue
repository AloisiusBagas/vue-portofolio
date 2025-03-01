<template>
  <div class="row g-4">
    <div v-for="item in mappedItems" :key="item.id" class="col-12 col-md-6">
      <div
        class="card mb-3 h-100 custom-card d-flex flex-row"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <div class="green-container" :class="getLanguageClass(item.language)"></div>
        <div class="flex-grow-1">
          <div class="card-body">
            <h5 class="card-title">{{ item.name }}</h5>
            <p class="card-text">
              {{ item.description }}
            </p>
            <p class="card-text">
              <img
                v-if="getLanguageIcon(item.language)"
                :src="getLanguageIcon(item.language)"
                :alt="item.language"
                width="20"
                height="20"
                class="me-1"
              />
              <i>{{ item.language }}</i>
            </p>
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
    const getLanguageClass = (language: string) => {
      switch (language?.toLowerCase()) {
        case 'java':
          return 'language-java'
        case 'dart':
          return 'language-dart'
        case 'dotnet':
          return 'language-dotNet'
        default:
          return 'language-default'
      }
    }

    const getLanguageIcon = (language: string) => {
      switch (language?.toLowerCase()) {
        case 'java':
          return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
        case 'dart':
          return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg'
        case 'dotnet':
          return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg'
        case 'javascript':
          return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
        case 'python':
          return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
        default:
          return '' // No icon
      }
    }

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
      error: portofolioStore.error,
      getLanguageClass,
      getLanguageIcon
    }
  }
})
</script>

<style scoped>
.card-body {
  color: var(--text-color);
}

.flex-grow-1 {
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* If you want content spread evenly */
  padding: 0; /* Remove extra padding if needed */
}

.card-text {
  color: var(--text-color);
}

.custom-card {
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--Background-color);
  display: flex;
}

.dark .custom-card {
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--Secondary-background-color);
}

.green-container {
  width: 15px;
  height: auto;
  flex-shrink: 0;
}

.language-java {
  background-color: #f8981d;
}

.language-dart {
  background-color: #01579b;
}

.language-dotNet {
  background-color: #512bd4;
}

.language-default {
  background-color: green;
}

@media (max-width: 767.98px) {
  .h-10-sm {
    height: 15px !important;
  }
}

@media (min-width: 768px) {
  .h-100-md {
    width: 15px !important;
    height: 100%;
  }
}
</style>
