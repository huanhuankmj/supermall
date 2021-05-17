<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot  name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div v-bind:class="{active:isActive}" :style=activeStyle>
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  //父传子
  props:{
    path:String,
    activeColor:{
      type:String,
      default: 'red'
    }
  },
  data() {
    return{
      //isActive:true
    }
  },
  computed:{
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      //isActive是否为true，是则执行{color: this.activeColor}，否则{}
      return this.isActive ? {color: this.activeColor} :{}
    }
  },
  methods:{
    itemClick() {
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>
.tab-bar-item{
  flex:1;
  text-align: center;
  height: 49px;
}

.tab-bar-item img{
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}

/*.active {*/
/*  color:#ff0000;*/
/*}*/
</style>
