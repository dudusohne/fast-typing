import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home/Home.vue'
import Stats from '../pages/Stats/Stats.vue'

const routes: Array<any> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/stats',
    name: 'Stats',
    component: Stats
  },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export { router }
