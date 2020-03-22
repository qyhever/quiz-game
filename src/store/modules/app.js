const state = {
  orderInfo: {},
  gameList: []
}

const mutations = {
  SET_ORDER_INFO(state, data) {
    state.orderInfo = data
  },
  SET_GAME_LIST(state, data) {
    state.gameList = data
  }
}

export default {
  state,
  mutations
}
