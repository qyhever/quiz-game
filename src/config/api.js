const baseURL = {
  dev: '/api',
  prod: '/api'
}[process.env.VUE_APP_MODE]

export default baseURL
