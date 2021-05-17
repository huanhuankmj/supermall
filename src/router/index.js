import Vue from 'vue'
import VueRouter from "vue-router";
const Home = () => import('../views/home/Home')
const Cart = () => import('../views/cart/Cart')
const Category = () => import('../views/category/Category')
const Profile = () => import('../views/profile/Profile')
const Detail = () =>  import('../views/detail/Detail')
//1.安装
Vue.use(VueRouter)

//2.创建对象
const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home,
    meta:{
      title:'首页'
    }
  },
  {
    path: '/cart',
    component: Cart,
    meta:{
      title: '购物车'
    }
  },
  {
    path: '/category',
    component:Category,
    meta:{
      title: '推荐'
    }
  },
  {
    path: '/profile',
    component:Profile,
    meta:{
      title: '我的'
    }
  },
  {
    path: '/detail',
    component:Category,
    meta:{
      title: '详情'
    }
  }
]

const router = new VueRouter({
  routes,
  mode:"history"
})

//3.导出
export default router
