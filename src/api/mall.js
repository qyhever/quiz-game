import request from '@/utils/request'

// 商品列表
export const getGoodsList = categoryId => {
  return request({
    url: '/mall/commodity',
    params: {
      categoryId
    }
  })
}
// 商品详情
export const getGoodsDetail = id => {
  return request({
    url: '/mall/detail',
    params: {
      id
    }
  })
}
// 购物车
export const getCartData = () => {
  return request({
    url: '/mall/cart'
  })
}
