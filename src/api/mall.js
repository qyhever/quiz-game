import request from '@/utils/request'

// 商品分类
export const getGoodsCategorys = () => {
  return request({
    url: '/mall/commodityCategory',
    requiredToken: false
  })
}
// 商品列表
export const getGoodsList = categoryId => {
  return request({
    url: '/mall/commodity',
    params: {
      categoryId
    },
    requiredToken: false
  })
}
// 商品详情
export const getGoodsDetail = id => {
  return request({
    url: '/mall/detail',
    params: {
      id
    },
    requiredToken: false
  })
}
// 购物车
export const getCartData = () => {
  return request({
    url: '/mall/cart'
  })
}

// 获取收货地址列表
export const getAddressList = () => {
  return request({
    url: '/mall/address'
  })
}

// 设为默认地址
export const setDefaultAddress = id => {
  return request({
    url: '/mall/defaultAddress',
    params: {
      id
    }
  })
}

// 添加收货地址
export const addAddress = data => {
  return request({
    method: "post",
    url: '/mall/addAddress',
    data
  })
}

// 删除收货地址
export const deleteAddress = id => {
  return request({
    url: '/mall/delAddress',
    params: { id }
  })
}
// 添加到购物车
export const addGoodsToCart = (commodityId, count = 1) => {
  return request({
    method: 'post',
    url: '/mall/addCart',
    data: {
      commodityId,
      count
    }
  })
}
