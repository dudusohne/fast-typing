import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/Home.vue')
  },
  {
    path: 'stats',
    name: 'stats',
    component: () => import('@/pages/Stats.vue')
  },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export { router }
