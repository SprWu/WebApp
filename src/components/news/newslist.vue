<template>
  <ul class="mui-table-view">
    <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.docid">
      <!-- 无API接口  -->
      <router-link :to="'/home/newsinfo/' + item.docid">
        <!-- <a :href="item.link"> -->
        <img class="mui-media-object mui-pull-left" :src="item.picInfo[0] | dataFormat ">
        <div class="mui-media-body">
          <h3>{{ item.title }}</h3>
          <p class="mui-ellipsis">
            <span>发表时间：{{ item.ptime }}</span>
            <span>来源： {{ item.source }}</span>
          </p>
        </div>
        <!-- </a> -->
      </router-link>
    </li>
  </ul>
</template>
<script>
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      newslist: []
    };
  },
  methods: {
    getnewslist() {
      this.$http.get("https://www.apiopen.top/journalismApi").then(result => {
        if (result.body.code === 200) {
          let news = result.body.data;
          console.log(news);
          this.newslist = this.newslist.concat(
            news.dy,
            news.toutiao,
            news.ent,
            news.money,
            news.sports,
            news.tech,
            news.war
          );
        } else {
          Toast("获取新闻列表失败！");
        }
      });
    }
  },
  created() {
    this.getnewslist();
  }
};
</script>

<style scoped>
.mui-table-view li h3 {
  font-size: 14px;
}
.mui-ellipsis {
  font-size: 12px;
  color: blue;
  /* 让p元素内部两个span 依主轴两端对齐 ---css3*/
  display: flex;
  justify-content: space-between;
}
</style>
