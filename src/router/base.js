/**
 * 基础路由
 * @type { *[] }
 */
 export const baseRouterMap = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home')
  }
]
