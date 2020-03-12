import request from '@/utils/request'

// 轮播图
export const getBannerData = () => {
  return request({
    url: '/home/banner',
    showLoading: false
  })
}
// 全部游戏
export const getTotalGames = () => {
  return request({
    url: '/home/game',
    showLoading: false
  })
}
// 热门赛事
export const getHotCompetitionData = () => {
  return request({
    url: '/home/hotMatch',
    showLoading: false
  })
}
