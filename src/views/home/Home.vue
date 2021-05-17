<template>
  <div id="home">
    <nav-bar class="homeNavBar"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend :recommends="recommends"></home-recommend>
    <feature-view></feature-view>
    <tab-control :titles="['流行','新款','精选']"
                 class="tabControl"
                 @itemClick="tabClick"></tab-control>
    <goods-list :goods="tabChange"></goods-list>
  </div>
</template>

<script>
import NavBar from "components/common/nabbar/NavBar";
import TabControl from "@/components/contect/tabControl/TabControl";
import GoodsList from "@/components/contect/goods/GoodsList";

import HomeSwiper from "@/views/home/childComps/HomeSwiper";
import HomeRecommend from "@/views/home/childComps/HomeRecommend";
import FeatureView from "@/views/home/childComps/FeatureView";

import {getHomeMultidata,getHomeGoods} from "network/home";
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    FeatureView,
    TabControl,
    GoodsList
  },
  data() {
    return {
      //result:null
      banners:[],
      recommends:[],
      goods:{
        'pop': {page:0,list:[]},
        'new': {page:0,list:[]},
        'sell': {page:0,list:[]}
      },
      //默认显示流行
      currentType:'pop'
    }
  },
  computed: {
    tabChange() {
     return this.goods[this.currentType].list
    }
  },
  created() {
    //请求多个数据
    this.getMultiData();
    this.getGoodsData('pop')
    this.getGoodsData('new')
    this.getGoodsData('sell')
  },
  methods:{
    /**
     * 交互所用方法
     */
    tabClick(index) {
      switch (index){
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell';
          break
      }
    },

    /**
     * 请求所用的方法
     */
    getMultiData() {
      getHomeMultidata().then(res => {
        console.log(res);
        //储存res
        //this.result = res;
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list
        // this.$nextTick(() => {
        //   this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
        // })
      })
    },
    getGoodsData(type) {
      let page = this.goods[type].page + 1
      getHomeGoods(type,page).then(res =>{
        console.log(res);
        //循环遍历将一个数组的元素push到另一个数组的简便写法
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      })
    }
  }
}
</script>

<style scoped>
#home {
  padding-top: 44px;
}

.homeNavBar{
  background-color: var(--color-tint);
  color:#ffffff;
  /*固定在最上面*/
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
}

/*吸顶效果*/
.tabControl{
  position: sticky;
  top: 44px;
  z-index: 9;
}

.soLong{
  height: 1000px;
}
</style>
