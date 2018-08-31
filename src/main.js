// 引入要使用的js和页面，router引进来之后，去App.vue的页面使用
import 'babel-polyfill' 
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'

import 'common/stylus/index.styl'

fastclick.attach(document.body)
Vue.use(VueLazyload,{
  // vue引入图片只能用require，webpack才能找到对应路径
  loading: require('common/image/default.png')
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
