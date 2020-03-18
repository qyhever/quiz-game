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
// 热门竞猜
export const getHotQuizData = () => {
  return request({
    url: '/home/guessingCompetition',
    showLoading: false
  })
}
// 热门战队
export const getHotTeamData = gameId => {
  return request({
    url: '/home/combatTeam',
    params: {
      gameId
    },
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
// 游戏赛事
export const getCompetitionsByGameId = gameId => {
  return request({
    url: `home/match/${gameId}`,
    showLoading: false
  })
}
// 战队列表
export const getTeamListByGameId = gameId => {
  return request({
    url: 'home/combatTeam',
    params: {
      gameId
    },
    showLoading: false
  })
}
// 战队介绍
export const getTeamIntro = id => {
  return request({
    url: 'home/teamIntroduction',
    params: {
      id
    }
  })
}
// 资讯详情
export const getInfoDetail = id => {
  return request({
    url: 'home/infoDetail',
    params: {
      id
    }
  })
}
// 赛事详情
export const getBatchDetail = id => {
  return request({
    url: 'home/matchDetail',
    params: {
      id
    }
  })
}
// 竞猜详情
export const getQuizDetail = id => {
  return request({
    url: 'home/gcDetail',
    params: {
      id
    }
  })
}
// 赛事 - 参赛战队
export const getMatchJoinTeam = matchId => {
  return request({
    url: 'home/joinTeam',
    params: {
      matchId
    }
  })
}
// 资讯列表
export const getInfoList = (classId = '') => {
  return request({
    url: 'home/information',
    params: {
      classId
    }
  })
}
// 资讯分类
export const getInfoClasses = () => {
  return request({
    url: 'home/infoClass'
  })
}
// 竞猜列表
export const getQuizsByGameId = (gameId = '') => {
  return request({
    url: 'home/guessingCompetitionInfo',
    params: {
      gameId
    }
  })
}
