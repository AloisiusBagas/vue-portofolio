import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import DetailPortofolio from '../pages/DetailPortofolio.vue'

const router = createRouter({
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/detail-portofolio/:id',
      name: 'detail-portofolio',
      component: DetailPortofolio
    }
  ]
})

export default router
