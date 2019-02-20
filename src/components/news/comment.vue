<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea 
            placeholder="请输入要评论的内容( 最多120字 )"
            maxlength="120"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item , i) in cmtlist" :key="item.id">
                <div class="cmt-title">
                    第{{ i+1 }}楼&nbsp;&nbsp;
                    用户：{{ item.name }}&nbsp;&nbsp;
                    发表时间：{{ item.time }}&nbsp;&nbsp;
                </div>
                <div class="cmt-body">
                   {{ item.content }}
                </div>
            </div>
        </div>
        <p>新闻id： {{newsid}}</p>
        <mt-button type="default" size="large" plain @click="getmore">加载更多</mt-button>
    </div>
</template>

<script>
import { Toast } from 'mint-ui'

export default {
    data(){
        return {
            cmtlist: [],
            newsid: '',
            pageindex: '1'
        }
    },
    methods: {
        getcomment(){
            this.$http.post('http://192.168.0.105:80/vue/comment.php',{
                id: this.id,
                pageindex: this.pageindex
            },{
                emulateJSON:true
            }).then(result => {
                if(result.body.status === 200){
                    //console.log(result.body.index)
                    // 使新获取的数据拼接入 cmtlist 中，而不是覆盖
                    this.cmtlist = this.cmtlist.concat(result.body.comment) 
                    this.newsid = result.body.id
                }else{
                    Toast("评论列表获取失败！")
                }
            })
        },
        getmore(){
            this.pageindex++
            //this.getcomment()
        }
    },
    props: ["id"],
    created(){
        this.getcomment();
    }
}
</script>

<style scoped>
.cmt-container h3{
    font-size: 20px;
}
.cmt-container textarea{
    font-size: 14px;
    height: 63px;
    margin: 0;
}
.cmt-container p{
    text-align: center;
    margin: 0 0;
}
.cmt-list{
    /* 评论间距 */
    margin: 5px 0;
}
.cmt-item{
    font-size: 13px;
}
.cmt-title{
    line-height: 30px;
    background-color: #ccc;
}
.cmt-body{
    line-height: 35px;
    /* 文本缩进 */
    text-indent: 2em;
}
</style>
