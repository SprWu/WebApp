<template>
    <div class="goods-list">
       <div class="goods-item"  v-for="item in gdlist" :key="item.id" @click="goto(item.id)">
           <img :src="item.src">
           <h1 class="title">{{ item.title }}</h1>
           <div class="info">
               <p class="price">
                   <span class="now">￥{{ item.now }}</span>
                   <span class="old">￥{{ item.old }}</span>
               </p>
               <p class="sell">
                   <span>热卖中</span>
                   <span>剩余{{ item.black }}件</span>
               </p>
           </div>
       </div>

    </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
    data(){
        return {
            gdlist: []
        }
    },
    methods: {
        getgoodslist(){
            this.$http.get('http://localhost:80/vue/goods.php').then(result => {
                if(result.body.status === 200){
                    //console.log(result.body)
                    this.gdlist = result.body.message
                }else{
                    Toast("商品数据加载失败！")
                }
            })
        },
        // 页面跳转(编程式路由导航)
        goto(id){
            // 1.this.$router.push('path')
            // 2.this.$router.push({path: 'path'})
            // 3.this.$router.push({name: 'name',params:{id:id}})
            this.$router.push('/home/goodsinfo/' + id);
        }
    },
    created(){
        this.getgoodslist()
    }
}
</script>

<style scoped>
.goods-list {
    display: flex;
    flex-wrap: wrap;
    padding: 6px;
    justify-content: space-between
}
.goods-item {
    width: 49%;
    border: 2px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 3px 0;
    padding: 2px;
    display: flex;
    /* 将主轴改成垂直 */
    flex-direction: column;
    justify-content: space-between;
    /* 最小高度 */
    min-height: 300px;
}
.goods-item img {
    width: 100%;
}
.title {
    font-size: 14px;
}
.info {
    background-color: #eee;
}
.now {
    color: red;
    font-weight: bold;
    font-size: 16px;
}
.old {
    text-decoration: line-through;
    font-size: 12px;
    margin-left: 10px;
}
.sell {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
}
p{
    margin: 0;
    padding: 5px;
}
</style>

