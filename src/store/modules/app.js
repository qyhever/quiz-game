const state = {
  orderInfo: {},
  personCircle: {},
  orderAddress: {}
}

const mutations = {
  SET_ORDER_ADDRESS(state, data) {
    state.orderAddress = data
  },
  SET_PERSON_CIRCLE(state, data) {
    state.personCircle = data
  }
}

export default {
  state,
  mutations
}
