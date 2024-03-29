/**
 * global components
 */
import Vue from 'vue'
import PageTabbarWrapper from '@/components/page-tabbar-wrapper'
import BlockHeader from '@/components/block-header'
import SvgIcon from '@/components/svg-icon'
import PageNavbarWrapper from '@/components/page-navbar-wrapper'
import PageTransition from '@/components/page-transition'
import DatetimePicker from '@/components/datetime-picker'
import Loadmore from '@/components/loadmore'
import Longtap from '@/components/longtap-container'
import Nav from '@/components/nav'
import PaytypePicker from '@/components/paytype-picker'

Vue.component('com-page-tabbar-wrapper', PageTabbarWrapper)
Vue.component('com-page-navbar-wrapper', PageNavbarWrapper)
Vue.component('com-block-header', BlockHeader)
Vue.component('com-svg-icon', SvgIcon)
Vue.component('com-page-transition', PageTransition)
Vue.component('com-datetime-picker', DatetimePicker)
Vue.component('com-loadmore', Loadmore)
Vue.component('com-longtap', Longtap)
Vue.component('com-nav', Nav)
Vue.component('com-paytype-picker', PaytypePicker)
