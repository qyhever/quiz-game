const state = {
  orderInfo: {}
}

const mutations = {
  SET_ORDER_INFO(state, data) {
    state.orderInfo = data
  }
}

export default {
  state,
  mutations
}
