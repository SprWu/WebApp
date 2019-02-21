<template>
  <div>
    <!-- 顶部滑动条 -->
    <div id="slider" class="mui-slider">
      <div
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a class="mui-control-item mui-active">风景</a>
          <a class="mui-control-item">影视</a>
          <a class="mui-control-item">萌宠</a>
          <a class="mui-control-item">动漫</a>
          <a class="mui-control-item">汽车</a>
          <a class="mui-control-item">爱情</a>
          <a class="mui-control-item">明星</a>
          <a class="mui-control-item">体育</a>
          <a class="mui-control-item">军事</a>
          <a class="mui-control-item">节日</a>
        </div>
      </div>
    </div>

    <!-- 图片展示区域 -->
    <ul class="photo-list">
      <li v-for="item in ptlist" :key="item.id">
        <img v-lazy="item.url">
        <div class="info">
            <div class="info-title">{{ item.title }}</div>
            <div class="info-body">{{ item.zhaiyao}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
//导入 mui.js
import mui from "../../lib/mui/js/mui.js";
import Toast from "mint-ui";

export default {
  data() {
    return {
      ptlist: []
    };
  },
  methods: {
    getphoto() {
      this.$http.get("http://192.168.0.105:80/vue/photo.php").then(result => {
        if (result.body.status === 200) {
          //console.log(result.body)
          this.ptlist = result.body.message;
        } else {
          Toast("图片列表加载失败！");
        }
      });
    }
  },
  created() {
    this.getphoto();
  },
  mounted() {
    //当组件中的DOM结构被渲染完成并放入页面后，执行
    //初始化组件
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  }
};
</script>

<style scoped>
* {
  /* Chrome 为了提高滑动页面的流畅度 */
  /* 指定某个指定区域是否支持用户操作 */
  /* pan-y 启用单指垂直手势 */
  touch-action: pan-y;
}

.photo-list{
    list-style: none;
    padding: 10px;
    margin: 0;
    padding-bottom: 0;
}
.photo-list li {
    background-color: #ccc;
    text-align: center;
    margin-bottom: 10px;
    box-shadow: 0 0 9px #999;
    position: relative;
}
.photo-list li img[lazy="loading"] {
  width: 40px;
  height: 300px;
  margin: auto;
}
.photo-list li img {
    width: 100%;
    /* 去除图片底边 */
    vertical-align: middle;
}
.info{
    color: white;
    text-align: left;
    position: absolute;
    bottom: 0;
    /* 阴影背景 */
    background-color: rgba(0, 0, 0, 0.4);
    /* 最大高度 */
    max-height: 84px;
}
.info-title{
    font-size: 14px;
}
.info-body{
    font-size: 13px;
}
</style>
