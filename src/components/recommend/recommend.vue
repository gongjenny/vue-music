<template>
  <div class="recommend">
    <!-- scroll 里面的内容 去填充到子组件中slot里面 -->
    <!-- 这里只传 discList的原因是：recommends 是先渲染的，当scroll计算滚动高度的时候，recommends的高度已经撑开了，scroll计算的高度已经把recommends的高度算进去了，但是还会有一个问题就是，在实际开发中，我们也不是那么确定是recommends先加载还是discList先加载，所以要解决这个问题，就需要使用img 的@load事件-->
      <scroll ref="scroll" class="recommend-content" :data="discList">
        <div>
          <div class="slider-wrapper">
            <slider v-if='recommends.length'>
              <div v-for="item in recommends" :key='item.id'>
                <a :href="item.linkUrl">
                  <img @load='loadImg' :src="item.picUrl" alt="">
                </a>
              </div>
            </slider>
          </div>
          <div class="recommend-list">
            <h1 class="list-title">热门歌单推荐</h1>
            <ul>
              <li v-for="(item,index) in discList" :key="index"  class="item">
                <div class="icon">
                  <img width="60" height="60" :src="item.imgurl" alt="">
                </div>
                <div class="text">
                  <h2 class="name" v-html="item.creator.name"></h2>
                  <p class="desc" v-html="item.dissname"></p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </scroll>
  </div>
</template>
<script type="text/ecmascript-6">
// 引入scorll 组件，下面注册一下scroll，即可在模板中使用
import Scroll from "base/scroll/scroll"
import Slider from "base/slider/slider"
import { getRecommend, getDiscList } from "api/recommend";
import { ERR_OK } from "api/config";
export default {
  data() {
    return {
      recommends: [],
      discList: []
    };
  },
  created() {
      this._getRecommend();
    this._getDiscList();
  },
  methods: {
    _getRecommend() {
      getRecommend().then((res) => {
        console.log(res);
        if (res.code === ERR_OK) {
          this.recommends = res.data.slider;
        }
      });
    },
    _getDiscList() {
      getDiscList().then(res => {
        if (res.code === ERR_OK) {
          this.discList = res.data.list;
          //console.log(res.data.list);
          //this.discList = res.data.list
        }
      });
    },
    loadImg(){
      // 图片加载出来的时候，让scroll重新计算高度
      // checkLoaded变量是一个标志位，用来控制 图片加载出来一张即可调用,不用每次加载都计算。
      if(!this.checkLoaded){
          this.$refs.scroll.refresh();
          this.checkLoaded = true;
      }
    }
  },
  components: {
    Slider,
    Scroll
  }
};
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable';

.recommend {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;

  .recommend-content {
    height: 100%;
    overflow: hidden;

    .slider-wrapper {
      position: relative;
      width: 100%;
      overflow: hidden;
    }

    .recommend-list {
      .list-title {
        height: 65px;
        line-height: 65px;
        text-align: center;
        font-size: $font-size-medium;
        color: $color-theme;
      }

      .item {
        display: flex;
        box-sizing: border-box;
        align-items: center;
        padding: 0 20px 20px 20px;

        .icon {
          flex: 0 0 60px;
          width: 60px;
          padding-right: 20px;
        }

        .text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
          line-height: 20px;
          overflow: hidden;
          font-size: $font-size-medium;

          .name {
            margin-bottom: 10px;
            color: $color-text;
          }

          .desc {
            color: $color-text-d;
          }
        }
      }
    }

    .loading-container {
      position: absolute;
      width: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>