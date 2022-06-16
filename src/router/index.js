import { createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import { baseRouterMap } from './base'
import { demoRouterMap } from './demo'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    ...baseRouterMap,
    ...demoRouterMap
  ],
})

export default router