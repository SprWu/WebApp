<template>
  <div class="goodsinfo">
    <!-- 加入购物车小球 -->
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ball" v-show="ballflag" ref="ball"></div>
    </transition>

    <!-- 商品图片展示 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <img :src="ptlist[id]" alt>
        </div>
      </div>
    </div>
    <!-- 商品购买区域 -->
    <div class="mui-card">
      <div class="mui-card-header">商品的名称标题</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            销售价：
            <span class="sellprice">{{ prlist[id][0] }}</span> &nbsp;市场价：
            <del>{{ prlist[id][1]}}</del>
          </p>
          <p>购买数量：
            <numberbox @getc="getCount"></numberbox>
          </p>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addshopcar">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>

    <!-- 商品参数区域 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{ id }}</p>
          <p>库存情况：有库存</p>
          <p>上架时间：{{ time | timeCorrect}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain>图文介绍</mt-button>
        <mt-button type="danger" size="large" plain>商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import numberbox from "../subcomponent/goodsnumBox";
export default {
  data() {
    return {
      ballflag: false, //小球是否隐藏
      selectCount: 1,
      ptlist: [
        "https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/2616970884/O1CN01VtMWyf1IOucLzHI24_!!0-item_pic.jpg_360x360Q90.jpg_.webp",
        "https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/1714128138/O1CN01Z9Lvae29zFgDFKnoN_!!0-item_pic.jpg_360x360Q90.jpg_.webp",
        "https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/2838892713/O1CN012iE5771Vub1bJDkPL_!!0-item_pic.jpg_360x360Q90.jpg_.webp",
        "https://g-search2.alicdn.com/img/bao/uploaded/i4/i2/2838892713/O1CN01Ax1gey1Vub1ZOW3UE_!!0-item_pic.jpg_360x360Q90.jpg_.webp",
        "https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/2616970884/O1CN01le9zgD1IOucUnY6Oc_!!0-item_pic.jpg_360x360Q90.jpg_.webp",
        "https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/1714128138/O1CN01BUPxUI29zFgMiXBtt_!!0-item_pic.jpg_360x360Q90.jpg_.webp",
        "https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/1695308781/O1CN01twebTG2EjkLo0lTMn_!!0-item_pic.jpg_360x360Q90.jpg_.webp",
        "https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/901409638/O1CN01pXjoP12L4FlaupQch_!!0-item_pic.jpg_360x360Q90.jpg_.webp",
        "https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/3409367247/O1CN0123PAlAl51OFpwWA_!!3409367247.jpg_360x360Q90.jpg_.webp",
        "https://g-search2.alicdn.com/img/bao/uploaded/i4/i3/1898764315/O1CN01s4bGft1hkJWOYzui0_!!0-item_pic.jpg_360x360Q90.jpg_.webp",
        "https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/1776456424/O1CN01wkcOek1xKEpDbgIPF_!!0-item_pic.jpg_360x360Q90.jpg_.webp"
      ],
      prlist: [
        [5288, 5688],
        [729, 800],
        [599, 699],
        [3099, 3599],
        [5938, 6288],
        [2499, 2600],
        [2350, 2498],
        [2799, 3000],
        [2299, 2599],
        [2528, 2528]
      ],
      id: this.$route.params.id,
      time: Date.now()
    };
  },
  methods: {
    addshopcar() {
      this.ballflag = !this.ballflag;

        //要保存到store中的购物车信息
      let goodsinfo = {
        id: this.id,
        count: this.selectCount,
        price: this.prlist[this.id][0],
        selected: true
      };

      this.$store.commit('addtocar',goodsinfo);
    },
    beforeEnter(el) {
      el.style.transform = "translate(0,0)";
    },
    enter(el, done) {
      el.offsetWidth;
      /* 小球动画优化
        1. 动态计算坐标值
            目标坐标 - 初始坐标
        2. getBoundingClientRect 获取目标元素据页面的距离
      */
      // 获取小球的坐标
      const ballps = this.$refs.ball.getBoundingClientRect();
      // 获取 数量标 的坐标
      const badgeps = document.getElementById("badge").getBoundingClientRect();

      const x = badgeps.left - ballps.left;
      const y = badgeps.top - ballps.top;
      //使用模板字符串时要使用 ``
      el.style.transform = `translate(${x}px,${y}px)`;
      //cubic... 是动画效果
      el.style.transition = "all 0.5s cubic-bezier(.4,-0.3,1,.68)";
      done();
    },
    afterEnter(el) {
      this.ballflag = !this.ballflag;
    },
    getCount(data) {
      this.selectCount = data;
    }
  },
  components: {
    numberbox
  }
};
</script>

<style scoped>
.ball {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  z-index: 60;
  top: 518px;
  left: 146px;
}

.goodsinfo {
  background-color: #ccc;
  overflow: hidden;
}
.mui-card-content-inner img {
  width: 100%;
}
.sellprice {
  color: red;
  font-size: 16px;
  font-weight: bold;
}
.mui-card-footer {
  display: block;
}
.mint-button {
  margin: 15px 0;
}
</style>
