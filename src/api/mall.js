import request from '@/utils/request'

// 商品分类
export const getGoodsCategorys = () => {
  return request({
    url: '/mall/commodityCategory'
  })
}
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
// 添加到购物车
export const addGoodsToCart = (commodityId, count = 1) => {
  return request({
    method: 'get',
    url: '/mall/addCart',
    params: {
      commodityId,
      count
    }
  })
}
