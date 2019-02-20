<template>
    <div class="newsinfo-content">
        <!-- 标题区  -->
        <h3 class="title">{{ newsinfo.title }}</h3>
        <!-- 子标题区  -->
        <p class="subtitle">
            <span>发表时间：{{ newsinfo.time }}</span>
            <span></span>
        </p>
        <hr>
        <!-- 内容区  -->
        <div class="content" v-html="newsinfo.content"></div>
        <!-- 评论区 -->
        <comment-box :id="this.id"></comment-box>
    </div>
</template>

<script>
import { Toast } from 'mint-ui'
import comment from './comment'
export default {
    data(){
        return {
            // 获取 url 中传递过来的 id
            id: this.$route.params.id,
            newsinfo: []
        }
    },
    methods: {
        getnewsinfo(){
            // 获取数据
            this.$http.get('url' + this.id ).then(result => {
                if(result.body.status === 200){
                    this.newsinfo = result.body.message
                }else {
                    Toast("获取新闻详情失败！")
                }
            })
        }
    },
    components: {
        'commentBox': comment
    },
    created () {
        this.getnewsinfo();
    }
}
</script>

<style scoped>
.newsinfo-content{
    padding: 0 4px;
}
.title{
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: red;
}
.subtitle{
    font-size: 13px;
    color: blue;
    display: flex;
    justify-content: space-between;
}
.content{
    
}
</style>
