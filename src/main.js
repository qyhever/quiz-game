import Vue from 'vue'

import App from './App.vue'

import router from './router'

import store from './store'
import './router/permission'
// import './icons'
import './plugins'

import './assets/styles/index.scss'
import './filters'

import WeiboEmoji from 'weibo-emoji'

Vue.use(WeiboEmoji)

import { Stepper, RadioGroup, Radio, Cell, CellGroup, Popup, Uploader, Dialog, Area, Switch } from 'vant'

Vue.use(Stepper)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Popup)
Vue.use(Uploader)
Vue.use(Dialog)
Vue.use(Area)
Vue.use(Switch)
// store.dispatch('user/initUser')
store.dispatch('user/initUser')
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
