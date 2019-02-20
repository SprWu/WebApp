import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import HomeContainer from '@/components/tabbar/HomeContainer'
import MemberContainer from '@/components/tabbar/MemberContainer'
import ShopcarContainer from '@/components/tabbar/ShopcarContainer'
import SearchContainer from '@/components/tabbar/SearchContainer'
import newslist from '@/components/news/newslist'
import newsinfo from '@/components/news/newsinfo'
Vue.use(Router)

export default new Router({
  routes: [
    {
      // 首页默认重定向
      path: '/',
      redirect: '/home'
    },{
      path: '/home',
      name: 'Home',
      component: HomeContainer
    },{
      path: '/member',
      name: 'Member',
      component: MemberContainer
    },{
      path: '/shopcar',
      name: 'Shopcar',
      component: ShopcarContainer
    },{
      path: '/search',
      name: 'Search',
      component: SearchContainer
    },{
      path: '/home/newslist',
      name: 'newslist',
      component: newslist
    },{
      path: '/home/newsinfo/:id',
      component: newsinfo
    }
  ],
  linkActiveClass: 'mui-active' //覆盖默认的路由高亮的类
})
