const getters = {
  user: state => state.user.info,
  token: state => state.user.token,
  personCircle: state => state.app.personCircle
}
export default getters
