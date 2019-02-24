<template>
  <div>
    <!-- 轮播图 -->
    <mt-swipe :auto="2000">
      <!-- 在组件中使用 v-for 循环时，一定要使用 :key -->
      <mt-swipe-item v-for="item in swipeList" :key="item.img">
        <img :src="item.img">
      </mt-swipe-item>
      <!-- <mt-swipe-item>
        <img src="https://uploadbeta.com/api/pictures/random/?key=BingEverydayWallpaperPicture" alt srcset>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="https://24bp.cn/pc.php" alt srcset>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="http://api.dujin.org/bing/1366.php" alt srcset>
      </mt-swipe-item> -->
    </mt-swipe>

    <!-- 六宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img src="../../icons/news.png" alt="">
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photolist">
          <img src="../../icons/photo.png" alt="">
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/shop">
          <img src="../../icons/buy.png" alt="">
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../icons/feedback.png" alt="">
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../icons/video.png" alt="">
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../icons/call.png" alt="">
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  data() {
    return {
      swipeList: [

      ]
    };
  },
  methods: {
    getSwipeData() {
      this.$http.get("http://localhost:80/vue/swipePhoto.php").then(result => {
        //console.log(result.body);
        if (result.body.status === "200") {
          //获取成功 将数据给 swipeList
          this.swipeList = result.body.message;
        } else {
          //失败
          Toast("加载轮播图失败！");
        }
      });
    }
  },
  created() {
    this.getSwipeData();
  }
};
</script>

<style scoped>
/* 没有安装 less scss */
.mint-swipe {
  height: 200px;
}
.mint-swipe-item:nth-child(1) {
  background-color: lightgoldenrodyellow;
}
.mint-swipe-item:nth-child(2) {
  background-color: lightblue;
}
.mint-swipe-item:nth-child(3) {
  background-color: lightpink;
}
img {
  width: 100%;
  height: 100%;
}
/* 最好在F12中复制对应的class */
.mui-grid-view.mui-grid-9 {
  background-color: white;
  border: none;
}
.mui-grid-view.mui-grid-9 img{
  width: 60px;
  height: 60px;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: none;
}
.mui-media-body{
  font-size: 13px;
}
</style>


