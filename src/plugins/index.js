/**
 * register plugins
 */
import Vue from 'vue'
import FastClick from 'fastclick'
import WeiboEmoji from 'weibo-emoji'
import './vant'
import './cube'
import './constant'
import './method'
import './component'

Vue.use(WeiboEmoji)
FastClick.attach(document.body)
