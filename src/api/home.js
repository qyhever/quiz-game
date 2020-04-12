import request from '@/utils/request'

// 轮播图
export const getBannerData = () => {
  return request({
    url: '/home/banner',
    showLoading: false,
    requiredToken: false,
    config: {
      loading: true
    }
  })
}
// 全部游戏
export const getTotalGames = () => {
  return request({
    url: '/home/game',
    showLoading: false,
    requiredToken: false
  })
}
// 热门赛事
export const getHotCompetitionData = () => {
  return request({
    url: '/home/hotMatch',
    showLoading: false,
    requiredToken: false
  })
}
// 热门竞猜
export const getHotQuizData = () => {
  return request({
    url: '/home/guessingCompetition',
    showLoading: false,
    requiredToken: false
  })
}
// 热门战队
export const getHotTeamData = gameId => {
  return request({
    url: '/home/combatTeam',
    params: {
      gameId
    },
    showLoading: false,
    requiredToken: false
  })
}
// 热门资讯
export const getHotInfoData = () => {
  return request({
    url: '/home/info',
    showLoading: false,
    requiredToken: false
  })
}
// 游戏赛事
export const getCompetitionsByGameId = gameId => {
  return request({
    url: `home/match/${gameId}`,
    showLoading: false,
    requiredToken: false
  })
}
// 战队列表
export const getTeamListByGameId = gameId => {
  return request({
    url: 'home/combatTeam',
    params: {
      gameId
    },
    showLoading: false,
    requiredToken: false
  })
}
// 战队介绍
export const getTeamIntro = id => {
  return request({
    url: 'home/teamIntroduction',
    params: {
      id
    },
    requiredToken: false
  })
}
// 资讯详情
export const getInfoDetail = id => {
  return request({
    url: 'home/infoDetail',
    params: {
      id
    },
    requiredToken: false
  })
}
// 赛事详情
export const getMatchDetail = id => {
  return request({
    url: 'home/matchDetail',
    params: {
      id
    },
    requiredToken: false
  })
}
// 赛事详情 - 相关资讯
export const getMatchInfo = matchId => {
  return request({
    url: 'home/matchInformation',
    params: {
      id: matchId
    },
    requiredToken: false
  })
}
// 竞猜详情
export const getQuizDetail = (id, matchInfoId) => {
  return request({
    url: 'home/gcDetail',
    params: {
      id,
      matchInfoId
    },
    requiredToken: false
  })
}
// 赛事 - 参赛战队
export const getMatchJoinTeam = matchId => {
  return request({
    url: 'home/joinTeam',
    params: {
      matchId
    },
    requiredToken: false
  })
}
// 资讯列表
export const getInfoList = params => {
  return request({
    url: 'home/information',
    params,
    requiredToken: false
  })
}
// 资讯分类
export const getInfoClasses = () => {
  return request({
    url: 'home/infoClass',
    requiredToken: false
  })
}
// 竞猜列表
export const getQuizsByGameId = (gameId = '') => {
  return request({
    url: 'home/guessingCompetitionInfo',
    params: {
      gameId
    },
    requiredToken: false
  })
}
// 投注竞猜
export const bettingQuiz = data => {
  return request({
    method: 'post',
    url: 'home/betting',
    data
  })
}
