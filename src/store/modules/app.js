const state = {
  orderInfo: {},
  personCircle: {}
}

const mutations = {
  SET_ORDER_INFO(state, data) {
    state.orderInfo = data
  },
  SET_PERSON_CIRCLE(state, data) {
    state.personCircle = data
  }
}

export default {
  state,
  mutations
}
