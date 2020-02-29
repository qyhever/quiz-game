const baseURL = {
  dev: '//192.168.0.107:9506/',
  // dev: '//192.168.31.118:9506',
  prod: '//qyhever.com/e-admin'
}[process.env.VUE_APP_MODE]

export default baseURL
