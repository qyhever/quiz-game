const getters = {
  user: state => state.user.info,
  token: state => state.user.token,
  personCircle: state => state.app.personCircle,
  orderAddress: state => state.app.orderAddress
}
export default getters
