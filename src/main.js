/*
 * @Descripttion: 
 * @version: 
 * @Author: yingkun
 * @Date: 2019-09-07 15:06:46
 * @LastEditors: yingkun
 * @LastEditTime: 2019-09-09 10:26:38
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
require('./assets/styles/reset.css')
require('./assets/styles/border.css')
require('./assets/styles/iconfont.css')

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper, /* { default global options } */)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// 路由就是根据网址的不同，返回不同的内容 
