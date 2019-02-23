<template>
  <div class="app-contauner">
    <!-- 顶部 Header 区域 -->
    <mt-header fixed title="项目练习 ---吴超"></mt-header>
    <mt-button class="goback" @click="goBack">
      <img src="./icons/back.png" height="20" width="20" slot="icon">
    </mt-button>
    <!-- 中间 路由 router-view 区域 -->
    <!-- 动画过渡 -->
    <transition>
      <router-view></router-view>
    </transition>

    <!--  底部  Tabbar 区域 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item-n" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item-n" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item-n" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge" id="badge">{{ $store.getters.getallcount }}</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item-n" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    goBack(){
      //console.log(this)
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.goback {
  position: absolute;
  z-index: 99;
  top: 0;
  background-color: #26a2ff;
}
.mint-header {
  z-index: 99;
}
.app-contauner {
  /* 顶部留出 */
  padding-top: 40px;
  /* 底部留出 */
  padding-bottom: 50px;
  /* 解决 当页面元素横向过大时 出现滚动条 */
  overflow-x: hidden;
}
/* 过渡动画 */
.v-enter {
  opacity: 0;
  /* 从100%到0 */
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  /* 从0到-100% */
  transform: translateX(-100%);
  /* 避免 每个组件过渡时 出现往上位移的情况 */
  position: absolute;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

/* 解决 tabbar 无法切换问题 */
.mui-bar-tab .mui-tab-item-n .mui-active {
  color: #007aff;
}
.mui-bar-tab .mui-tab-item-n {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}
.mui-bar-tab .mui-tab-item-n .mui-icon {
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-n .mui-icon ~ .mui-tab-label {
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>

