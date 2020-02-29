import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import './router/permission'
import './icons'
import './plugins'

import './assets/styles/index.scss'
import './filters'
// store.dispatch('user/initUser')
// if (process.env.NODE_ENV === 'development') {
//   new window.VConsole()
// }
// document.body.addEventListener('ontouchmove', e => {
//   e.preventDefault()
// }, {
//   passive: true
// })
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
