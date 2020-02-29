import { getUser, setToken, removeToken, setUser, removeUser } from '@/utils/local'
// import router, { resetRouter } from '@/router'

const state = {
  info: {}
}

const mutations = {
  SET_INFO(state, data) {
    state.info = data
  }
}

const actions = {
  clearInfo({ commit }) {
    return new Promise(resolve => {
      commit('SET_INFO', {})
      removeUser() // removeUser local
      removeToken() // removeToken local
      resolve()
    })
  },
  initUser({ commit, dispatch }, data) {
    // 处理页面刷新
    if (!data) {
      const localData = getUser()
      if (localData) {
        data = localData
      } else {
        return dispatch('clearInfo')
      }
    }
    // 处理用户主动登录
    const { token, user } = data
    return new Promise(resolve => {
      commit('SET_INFO', user)
      setUser(data) // setUser local
      setToken(token) // setToken local
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
