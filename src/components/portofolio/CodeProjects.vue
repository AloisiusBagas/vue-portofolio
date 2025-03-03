<template>
  <!-- Loading Spinner -->
  <div v-if="loading" class="d-flex justify-content-center align-items-center py-5">
    <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>

  <!-- Error Message -->
  <div v-else-if="error" class="alert alert-danger text-center" role="alert">
    <div class="d-flex flex-column align-items-center justify-content-center gap-2">
      <i class="fa-solid fa-triangle-exclamation"></i>
      {{ error }}
    </div>
    <button type="button" class="btn btn-secondary mt-3" @click="portofolioStore.fetchItems">
      <div class="d-flex gap-2 align-items-center">
        <i class="col fa-solid fa-arrow-rotate-right"></i>
        Refresh
      </div>
    </button>
  </div>

  <!-- Portfolio Items -->
  <div v-else class="row g-4">
    <div v-for="item in mappedItems" :key="item.id" class="col-12 col-md-6">
      <div class="card mb-3 h-100 custom-card d-flex flex-row" data-aos="zoom-in" data-aos-delay="200">
        <div class="green-container" :class="getLanguageClass(item.language)"></div>
        <div class="flex-grow-1">
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <h5 class="card-title text-link" @click="openLinkInNewTab(item.url)">
                {{ item.name }}
              </h5>
              <i class="fa-solid fa-up-right-from-square" style="cursor: pointer"
                @click="openLinkInNewTab(item.url)"></i>
            </div>
            <p class="card-text">
              {{ item.description }}
            </p>
            <div class="d-flex flex-row justify-content-around">
              <div>
                <p class="card-text">
                  <img v-if="getLanguageIcon(item.language)" :src="getLanguageIcon(item.language)" :alt="item.language"
                    width="20" height="20" class="me-2" />
                  <i>{{ item.language }}</i>
                </p>
              </div>
              <div class="d-flex align-items-center gap-1">
                <i class="col fa-regular fa-star"></i>
                <p class="col m-0">{{ item.stargazers_count }}</p>
              </div>
              <div class="d-flex align-items-center gap-1">
                <i class="fa-solid fa-code-fork me-2"></i>
                <p class="col m-0">{{ item.stargazers_count }}</p>
              </div>
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

    const openLinkInNewTab = (url) => {
      if (url) {
        window.open(url, '_blank', 'noopener,noreferrer')
      } else {
        console.warn('No URL provided')
      }
    }
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
        url: repo.url,
        language: repo.language || 'Unknown',
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        createdAt: new Date(repo.created_at).toLocaleDateString(),
        updatedAt: new Date(repo.updated_at).toLocaleDateString()
      }))
    })

    return {
      mappedItems,
      loading: computed(() => portofolioStore.loading),
      error: computed(() => portofolioStore.error),
      getLanguageClass,
      getLanguageIcon,
      openLinkInNewTab,
      portofolioStore
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
  justify-content: space-between;
  /* If you want content spread evenly */
  padding: 0;
  /* Remove extra padding if needed */
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
