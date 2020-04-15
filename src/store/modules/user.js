import { getUser, setToken, getToken, removeToken, setUser, removeUser } from '@/utils/local'
// import router, { resetRouter } from '@/router'

const state = {
  info: {},
  token: getToken()
}

const mutations = {
  SET_USER(state, user) {
    state.info = user
    setUser({
      user,
      token: getToken()
    }) // setUser local
  },
  SET_INFO(state, data) {
    state.info = data.user
    setUser(data) // setUser local
  },
  SET_TOKEN(state, val) {
    state.token = val
    setToken(val) // saveToken local
  }
}

const actions = {
  clearInfo({ commit }) {
    return new Promise(resolve => {
      commit('SET_INFO', {user: {}})
      commit('SET_TOKEN', null)
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
    const { token } = data
    return new Promise(resolve => {
      commit('SET_INFO', data)
      commit('SET_TOKEN', token)
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
