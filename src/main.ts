import './assets/main.css'
import { ViteSSG } from 'vite-ssg'
import { createPinia } from 'pinia'

import App from './App.vue'
import { routes } from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'aos/dist/aos.css'
import 'lenis/dist/lenis.css'
import VueSweetalert2 from 'vue-sweetalert2'

export const createApp = ViteSSG(
  App,
  {
    routes,
    base: import.meta.env.BASE_URL,
    scrollBehavior() {
      // always scroll to top
      return { top: 0 }
    }
  },
  ({ app, isClient }) => {
    app.use(createPinia())
    app.use(VueSweetalert2)

    if (isClient) {
      // Browser-only: bootstrap's JS touches `document` on import,
      // and Vercel analytics only makes sense on the client
      import('bootstrap')
      import('@vercel/analytics').then(({ inject }) => inject())
    }
  }
)
