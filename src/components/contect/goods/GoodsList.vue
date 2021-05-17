<template>
  <div class="goodsList">
    <goods-list-item v-for="item in goods"
                     :good="item"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "components/contect/goods/GoodsListItem";

export default {
  name: "GoodsList",
  components:{
    GoodsListItem
  },
  props:{
    goods:{
      type:Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .goodsList{
    display: flex;
    /*根据宽度来塞元素*/
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 4px;
  }

</style>
