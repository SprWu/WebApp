<template>
  <div class="shopcar">
    <!-- 商品列表项 -->
    <div class="goods-list">
      <div class="mui-card" v-for="(item,i) in idlist" :key="item.id">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch v-model="$store.getters.getselect[item.id]" @change="selchange(item.id)"></mt-switch>
            <img :src="ptlist[item.id]">
            <div class="info">
              <h1>{{ namelist[item.id]}}</h1>
              <p>
                <span class="price">￥ {{prlist[item.id][0]}}</span>
                <shopcarbox :goodsid="{id:item.id,count:item.count}"></shopcarbox>
                <a href="#" @click.prevent="remove(item.id,i)">删除</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 结算 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner settle">
          <div class="left">
            <p>总计(不含运费)</p>
            <p>已勾选商品
              <span class="red">{{ $store.getters.getsum.sum}}</span> 件，总价
              <span class="red">￥{{ $store.getters.getsum.count}}</span>
            </p>
          </div>
          <mt-button type="danger">去结算</mt-button>
        </div>
      </div>
    </div>
    <p hidden>{{ $store.getters.getselect }}</p>
  </div>
</template>

<script>
import shopcarbox from "@/components/subcomponent/shopcarBox";
export default {
  data() {
    return {
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
      namelist: [
        "Apple/苹果 iPhone XR 移动联通电信4G",
        "Xiaomi/小米 红米6 ai双摄8核全面屏智能",
        "Huawei/华为 畅享 8e 青春版",
        "Huawei/华为 nova 4",
        "Apple/苹果 iPhone X 64G 全网通4G智能",
        "Xiaomi/小米 小米8年度旗舰全面屏骁龙845指纹",
        "Meizu/魅族 16th骁龙845 超窄边框全面屏",
        "OPPO R17全面屏拍照手机AI智能屏幕指纹",
        "Phone 8 Plus苹果8plus",
        "nubia/努比亚 红魔Mars",
        "中移动Apple/苹果 iPhone 6s国行"
      ],
      idlist: []
    };
  },
  methods: {
    getidlist() {
      this.$store.state.car.forEach(item => {
        this.idlist.push(item);
      });
    },
    remove(id, index) {
      //从 idlist 中删除index位置的数据
      this.idlist.splice(index, 1);
      //从 store 中输出id对应的数据
      this.$store.commit("removegoods", id);
    },
    selchange(id) {
      this.$store.commit("selectchange", id);
    }
  },
  components: {
    shopcarbox
  },
  created() {
    this.getidlist();
  }
};
</script>

<style scoped>
.shopcar {
  background-color: #ccc;
  overflow: hidden;
}
.goods-list img {
  width: 60px;
  height: 60px;
}
.goods-list h1 {
  font-size: 16px;
}
.price {
  color: red;
  font-weight: bold;
}
.mui-card-content-inner {
  display: flex;
  align-items: center;
}
.info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.settle {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.red {
  color: red;
  font-size: 16px;
  font-weight: bold;
}
</style>

