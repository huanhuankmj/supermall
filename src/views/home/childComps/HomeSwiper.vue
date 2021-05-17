<template>
  <div class="swiper">
    <swiper>
      <swiper-item v-for="item in banners">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from "components/common/swiper/index"

export default {
  name: "HomeSwiper",
  components:{
    Swiper,
    SwiperItem
  },
  props:{
    banners:{
      type:Array,
      //默认值，要传的为数组或者对象时，默认值必须为函数
      default() {
        return []
      }
    }
  },
  methods: {
    stopTimer() {
      this.$refs.swiper.stopTimer()
    },
    startTimer() {
      if (this.$refs.swiper) {
        this.$refs.swiper.startTimer()
      }
    }
  }
}
</script>

<style scoped>

</style>
