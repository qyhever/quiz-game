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

// 获取图片验证码
export const getVeifyCode = () => {
  return request({
    url: '/captchaImage'
  })
}

// 用户信息
export const getPersonalInfo = (data) => {
  return request({
    method: 'get',
    url: '/user',
    params: data
  })
}

// 修改手机号
export const editPhone = (data) => {
  return request({
    method: 'get',
    url: '/user/editPhone',
    params: data
  })
}

// 修改邮箱
export const editEmail = (data) => {
  return request({
    method: 'get',
    url: '/user/editEmail',
    params: data
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

// 订单详情
export const getOrderDetail = (data) => {
  return request({
    method: "get",
    url: "/user/orderDetail",
    params: data
  })
}

// 我的竞豆-充值列表
export const getBeanRecharge = (data) => {
  return request({
    method: "get",
    url: "/user/beanRecharge",
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

// 关注战队
export const getFollowTeam = (data) => {
  return request({
    method: "get",
    url: "/user/followTeam",
    params: data
  })
}

// 关注赛事
export const getFollowMatch = (data) => {
  return request({
    method: "get",
    url: "/user/followMatch",
    params: data
  })
}

// 推广明细
export const getPromoteDetail = () => {
  return request({
    method: "get",
    url: "/user/promotionDetails"
  })
}
// 手机验证码
export const getPhoneVerifyCode = phone => {
  return request({
    method: "get",
    url: "/user/sendCode",
    params: {
      phone
    }
  })
}
