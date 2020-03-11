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

// 系统消息
export const getSystemMessage = (data) => {
  return request({
    method: "get",
    url: "/user/message",
    params: data
  })
}

// 我的竞猜
export const getMyBetting = (data) => {
  return request({
    method: "get",
    url: "/user/mybetting",
    params: data
  })
}

// 我的订单
export const getMyOrder = (data) => {
  return request({
    method: "get",
    url: "/user/myOrder",
    params: data
  })
}

// 我的竞豆-明细
export const getBeanDetailed = (data) => {
  return request({
    method: "get",
    url: "/user/beanDetailed",
    params: data
  })
}

// 关注选手
export const getFollowPlayer = (data) => {
  return request({
    method: "get",
    url: "/user/followPlayer",
    params: data
  })
}
