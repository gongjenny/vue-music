// 该页面是配置路由的，对应路径，跳转到对应页面。 所以要引进页面、引进Router,配置完成之后，去main.js中引入router
import Vue from 'vue'
import Router from 'vue-router'
import Rank from 'components/rank/rank'
import Recommend from 'components/recommend/recommend'
import Search from 'components/search/search'
import Singer from 'components/singer/singer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/rank',
      name: 'Rank',
      component: Rank
    },
    {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/singer',
      name: 'Singer',
      component: Singer
    }
  ]
})
