import Vue from 'vue'
import Router from 'vue-router'
// import TabbarLayout from '@/layouts/tabbar-layout'
// import AppLayout from '@/layouts/app-layout'

Vue.use(Router)

// 生成路由实例
const createRouter = () => new Router({
  mode: 'hash',
  base: '/',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: () => import('@/views/login')
    // },
    // {
    //   path: '/register',
    //   name: 'register',
    //   component: () => import('@/views/register')
    // },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home')
    },
    {
      path: '/competition',
      name: 'competition',
      component: () => import('@/views/competition')
    },
    {
      path: '/mall',
      name: 'mall',
      component: () => import('@/views/mall')
    },
    {
      path: '/circle',
      name: 'circle',
      component: () => import('@/views/circle')
    },
    {
      path: '/my',
      name: 'my',
      component: () => import('@/views/my')
    },
    {
      path: '/information',
      name: 'information',
      component: () => import('@/views/home/information')
    }
  ]
})

const router = createRouter()

 // reset router
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
