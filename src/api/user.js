import request from '@/utils/request'

export const login = (data) => {
  return request({
    method: 'post',
    url: '/auth/login',
    data
  })
}

export const register = (fn, data) => {
  return request(fn)({
    method: 'post',
    url: '/user/register',
    data,
    showLoading: false
  })
}

export const getVeifyCode = () => {
  return request({
    url: '/captchaImage'
  })
}

export const getPersonalInfo = () => {
  return request({
    method: 'get',
    url: '/user/my'
  })
}
