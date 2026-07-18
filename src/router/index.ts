import type { RouteRecordRaw } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import DetailPortofolio from '../pages/DetailPortofolio.vue'

// Raw route records: the router itself is created by ViteSSG in main.ts
export const routes: RouteRecordRaw[] = [
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
