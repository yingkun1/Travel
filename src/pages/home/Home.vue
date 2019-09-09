<!--
 * @Descripttion: 
 * @version: 
 * @Author: yingkun
 * @Date: 2019-09-07 16:02:56
 * @LastEditors: yingkun
 * @LastEditTime: 2019-09-09 11:05:12
 -->
<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
    </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
export default {
    name:'Home',
    components:{
        HomeHeader,
        HomeSwiper
    }
}
</script>

<style>

</style>
