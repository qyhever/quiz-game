import request from '@/utils/request'

export const login = data => {
  return request({
    method: 'post',
    url: '/auth/login',
    data
  })
}

export const register = data => {
  return request({
    method: 'post',
    url: '/user/register',
    data
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
