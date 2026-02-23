<template>
  <!-- Portfolio Items -->
  <div class="row g-4">
    <div v-for="item in paginatedItems" :key="item.id" class="col-12 col-md-6">
      <div class="card mb-3 h-100 custom-card d-flex flex-row" data-aos="zoom-in" data-aos-delay="200">
        <div class="green-container" :class="getLanguageClass(item.language)"></div>
        <div class="flex-grow-1">
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <h5 class="card-title text-link" @click="goToDetail(item.id)">
                {{ item.title }}
              </h5>
              <i class="fa-solid fa-up-right-from-square" style="cursor: pointer"
                @click="goToDetail(item.id)"></i>
            </div>
            <p class="card-text mb-3">
              {{ item.subtitle }}
            </p>
            <div class="d-flex flex-wrap gap-2">
              <span v-for="tag in item.tags" :key="tag" class="badge rounded-pill bg-light text-dark">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Pagination -->
  <nav v-if="totalPages > 1" class="mt-5 d-flex justify-content-center">
    <ul class="pagination custom-pagination">
      <li class="page-item" :class="{ disabled: currentPage === 1 }">
        <button class="page-link" @click="currentPage--" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </button>
      </li>
      <li v-for="page in totalPages" :key="page" class="page-item" :class="{ active: currentPage === page }">
        <button class="page-link" @click="currentPage = page">{{ page }}</button>
      </li>
      <li class="page-item" :class="{ disabled: currentPage === totalPages }">
        <button class="page-link" @click="currentPage++" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </button>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { projects } from '../../data/projects'
import type { Project } from '../../data/projects'

export default defineComponent({
  setup() {
    const router = useRouter()
    const currentPage = ref(1)
    const itemsPerPage = 6

    const goToDetail = (id: string) => {
      const routeData = router.resolve({ name: 'detail-portofolio', params: { id } })
      window.open(routeData.href, '_blank')
    }

    const openLinkInNewTab = (url: string | null | undefined) => {
      if (url && url !== '#') {
        window.open(url, '_blank', 'noopener,noreferrer')
      } else {
        console.warn('No URL provided or dummy link')
      }
    }

    const getLanguageClass = (language: string | undefined) => {
      switch (language?.toLowerCase()) {
        case 'java':
          return 'language-java'
        case 'dart':
        case 'flutter':
          return 'language-dart'
        case 'dotnet':
          return 'language-dotNet'
        default:
          return 'language-default'
      }
    }

    const mappedItems = computed(() => {
      return projects.map((project: Project) => {
        return {
          id: project.id,
          title: project.title,
          subtitle: project.subtitle,
          language: project.language || 'Unknown',
          htmlurl: project.githubLink,
          tags: project.tag
        }
      })
    })

    const totalPages = computed(() => Math.ceil(mappedItems.value.length / itemsPerPage))

    const paginatedItems = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage
      const end = start + itemsPerPage
      return mappedItems.value.slice(start, end)
    })

    return {
      paginatedItems,
      totalPages,
      currentPage,
      getLanguageClass,
      openLinkInNewTab,
      goToDetail
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

.text-link {
  cursor: pointer;
  transition: color 0.3s;
}

.text-link:hover {
  text-decoration: underline;
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

.custom-pagination .page-link {
  color: var(--text-color);
  background-color: var(--Background-color);
  border-color: var(--grey-color);
  transition: all 0.3s ease;
}

.custom-pagination .page-item.active .page-link {
  background-color: var(--primary-orange-color);
  border-color: var(--primary-orange-color);
  color: #fff;
}

.custom-pagination .page-link:hover {
  background-color: var(--primary-orange-color);
    border-color: var(--primary-orange-color);

  color: #fff;
}

.custom-pagination .page-item.disabled .page-link {
  background-color: var(--Background-color);
  border-color: var(--grey-color);
  opacity: 0.5;
}
</style>
