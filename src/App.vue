<template>
  <div id="app">
    <m-header></m-header>
    <!--router.js配置好路由之后，在main.js中引入router，在页面上使用router渲染的组件 -->
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    
  </div>
</template> 

<script>
// import MHeader from './components/m-header/m-header' 这样写找相对路径
import MHeader from 'components/m-header/m-header'  //这样写是用的配置的别名
import Tab from 'components/tab/tab'
export default {
  components:{
      MHeader,
      Tab
  }
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
</style>
