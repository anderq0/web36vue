import { createWebHistory, createRouter } from 'vue-router'

import HomePage from '#root/pages/HomePage.vue'
import MemoryGamePage from '#root/pages/MemoryGamePage.vue'
import AboutTurtles from '#root/pages/AboutTurtles.vue'

const routes = [
  { path: '/web36vue/', component: HomePage },
  { path: '/web36vue/about', component: MemoryGamePage },
  { path: '/web36vue/turtles', component: AboutTurtles },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export { router }
