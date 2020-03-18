import router from './'
// import { getToken } from '@/utils/local'
import { clearPending } from '@/utils/request'

// const whiteList = ['/login', '/register']
router.beforeEach(async (to, from, next) => {
  clearPending()
  // const token = getToken()
  // if (token) {
  //   if (to.path === '/login') {
  //     next('/')
  //   } else {
  //     next()
  //   }
  // } else {
  //   if (whiteList.indexOf(to.path) >= 0) {
  //     next()
  //   } else {
  //     next('/login')
  //   }
  // }
  next()
})
