const baseURL = {
  dev: '/api/',
  prod: 'http://netdj.com/api'
  // prod: 'http://120.24.224.218:8080'
}[process.env.VUE_APP_MODE]

export default baseURL
