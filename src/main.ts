import { createApp } from 'vue'
import './style.css'
import { createPinia } from 'pinia'
import App from '#root/App.vue'
import {router} from './routes'

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')