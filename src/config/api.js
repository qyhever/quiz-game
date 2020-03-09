const baseURL = {
  dev: '//120.24.224.218:8080/',
  prod: '//120.24.224.218:8080/'
}[process.env.VUE_APP_MODE]

export default baseURL
