<!--
 * @Descripttion: 
 * @version: 
 * @Author: yingkun
 * @Date: 2019-09-09 10:27:49
 * @LastEditors: yingkun
 * @LastEditTime: 2019-09-09 11:12:06
 -->
<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img
                    class="swiper-img"
                    :src="item.imgUrl"
                >
            </swiper-slide>
            <!-- Optional controls -->
            <div
                class="swiper-pagination"
                slot="pagination"
            ></div>
        </swiper>
    </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop:true
      },
      swiperList:[
          {
              id:'0001',
              imgUrl:'https://img1.qunarzz.com/order/comp/1805/2e/6e407f088bfb902.png'
          },
          {
              id:'0002',
              imgUrl:'https://img1.qunarzz.com/order/comp/1805/2e/6e407f088bfb902.png',
          }
      ]
    };
  }
};
</script>

<style lang='stylus' scoped>
.wrapper {
    .swiper-img {
        width: 100%;
        overflow: hidden;
        width: 100%;
        background: #eee;
    }
}
</style>
