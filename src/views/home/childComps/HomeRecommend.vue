<template>
  <div class="recommend">
    <div class="recommendItem" v-for="item in recommends">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props:{
    recommends:{
      type:Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .recommend{
    display: flex;
    width: 100%;
    text-align: center;
    padding-top: 10px;
    border-bottom: 10px solid #eee;
  }

  .recommendItem{
    flex: 1;
    margin-bottom: 25px;
  }

  .recommendItem img{
    width: 85%;
    height: 85%;
  }
</style>
