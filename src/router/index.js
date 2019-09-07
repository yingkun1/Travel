/*
 * @Descripttion: 
 * @version: 
 * @Author: yingkun
 * @Date: 2019-09-07 15:06:46
 * @LastEditors: yingkun
 * @LastEditTime: 2019-09-07 17:01:29
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home.vue'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
