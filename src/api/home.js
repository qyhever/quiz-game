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
// 热门竞猜
export const getHotQuizData = () => {
  return request({
    url: '/home/guessingCompetition',
    showLoading: false
  })
}
// 热门战队
export const getHotTeamData = () => {
  return request({
    url: '/home/hotTeam',
    showLoading: false
  })
}
// 热门资讯
export const getHotInfoData = () => {
  return request({
    url: '/home/info',
    showLoading: false
  })
}
// 热门赛事
export const getHotCompetitionData = () => {
  return request({
    url: '/home/match',
    showLoading: false
  })
}
