import request from '@/utils/request'

export const login = (fn, data) => {
  return request(fn)({
    method: 'post',
    url: '/user/login',
    data,
    showLoading: false
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

export const getPersonalInfo = () => {
  return request({
    method: 'get',
    url: '/user/my'
  })
}
