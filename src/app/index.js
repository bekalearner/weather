import { createApp } from 'vue'
import { createPinia } from 'pinia'

import '@/app/styles/main.css'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)

export default app
