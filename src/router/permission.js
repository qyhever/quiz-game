import router from './'
import { getToken } from '@/utils/local'
import { clearPending } from '@/utils/request'

// const whiteList = ['/login', '/register']
const checkList = ['/my', '/circle']
router.beforeEach(async (to, from, next) => {
  clearPending()
  const token = getToken()
  if (token) {
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    if (checkList.indexOf(to.path) >= 0) { // 需要登录，跳转登录
      next('/login')
    } else { // 无需登录，直接放行
      next()
    }
  }
  next()
})
