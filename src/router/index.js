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
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/user/login')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/user/register')
    },
    {
      path: '/forget-password',
      name: 'forgetPassword',
      component: () => import('@/views/user/forget-password')
    },
    {
      path: '/mail',
      name: 'mail',
      component: () => import('@/views/user/mail')
    },
    {
      path: '/mail-check-success',
      name: 'mailCheckSuccess',
      component: () => import('@/views/user/mail-check-success')
    },
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
      path: '/competition-intro',
      name: 'competitionIntro',
      component: () => import('@/views/competition/competition-intro')
    },
    {
      path: '/team',
      name: 'team',
      component: () => import('@/views/team')
    },
    {
      path: '/team-intro',
      name: 'teamIntro',
      component: () => import('@/views/team/team-intro')
    },
    {
      path: '/mall',
      name: 'mall',
      component: () => import('@/views/mall')
    },
    {
      path: '/shopcart',
      name: 'shopcart',
      component: () => import('@/views/mall/shop-cart')
    },
    {
      path: '/goods-detail',
      name: 'goodsDetail',
      component: () => import('@/views/mall/goods-detail')
    },
    {
      path: '/circle',
      name: 'circle',
      component: () => import('@/views/circle')
    },
    {
      path: '/personal-data',
      name: 'personalData',
      component: () => import('@/views/my/personal-data')
    },
    {
      path: '/follow-match',
      name: 'followMatch',
      component: () => import('@/views/my/follow-match')
    },
    {
      path: '/follow-team',
      name: 'followTeam',
      component: () => import('@/views/my/follow-team')
    },
    {
      path: '/follow-player',
      name: 'followPlayer',
      component: () => import('@/views/my/follow-player')
    },
    {
      path: '/bean-detailed',
      name: 'beanDetailed',
      component: () => import('@/views/my/bean-detailed')
    },
    {
      path: '/bean-recharge',
      name: 'beanRecharge',
      component: () => import('@/views/my/bean-recharge')
    },
    {
      path: '/guessing-competition',
      name: 'guessingCompetition',
      component: () => import('@/views/my/guessing-competition')
    },
    {
      path: '/my-order',
      name: 'myOrder',
      component: () => import('@/views/my/my-order')
    },
    {
      path: '/order-detailed',
      name: 'orderDetailed',
      component: () => import('@/views/my/order-detailed')
    },
    {
      path: '/system-message',
      name: 'systemMessage',
      component: () => import('@/views/my/system-message')
    },
    {
      path: '/edit-phone',
      name: 'editPhone',
      component: () => import('@/views/my/edit-phone')
    },
    {
      path: '/edit-emial',
      name: 'editEmial',
      component: () => import('@/views/my/edit-emial')
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
    },
    {
      path: '/promote',
      name: 'promote',
      component: () => import('@/views/promote')
    },
    {
      path: '/friend',
      name: 'friend',
      component: () => import('@/views/promote/friend')
    },
    {
      path: '/withdrawal',
      name: 'withdrawal',
      component: () => import('@/views/promote/withdrawal')
    },
    {
      path: '/promote-detail',
      name: 'promote-detail',
      component: () => import('@/views/promote/promote-detail')
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
