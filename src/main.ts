import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'aos/dist/aos.css'
import 'lenis/dist/lenis.css'
import VueSweetalert2 from 'vue-sweetalert2'
import { inject } from "@vercel/analytics"

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueSweetalert2)
inject()
app.mount('#app')
