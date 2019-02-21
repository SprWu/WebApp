<template>
    <div class="goods-list">
       <div class="goods-item">
           <img src="https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/2616970884/O1CN01VtMWyf1IOucLzHI24_!!0-item_pic.jpg_360x360Q90.jpg_.webp">
           <h1 class="title">下单低至5288元】Apple/苹果 iPhone XR 移动联通电信4G</h1>
           <div class="info">
               <p class="price">
                   <span class="now">￥5688</span>
                   <span class="old">￥6000</span>
               </p>
               <p class="sell">
                   <span>热卖中</span>
                   <span>剩余60件</span>
               </p>
           </div>
       </div>
          <div class="goods-item">
           <img src="https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/2616970884/O1CN01VtMWyf1IOucLzHI24_!!0-item_pic.jpg_360x360Q90.jpg_.webp">
           <h1 class="title"> iPhone XR 移动联通电信4G</h1>
           <div class="info">
               <p class="price">
                   <span class="now">￥5688</span>
                   <span class="old">￥6000</span>
               </p>
               <p class="sell">
                   <span>热卖中</span>
                   <span>剩余60件</span>
               </p>
           </div>
       </div>
          <div class="goods-item">
           <img src="https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/2616970884/O1CN01VtMWyf1IOucLzHI24_!!0-item_pic.jpg_360x360Q90.jpg_.webp">
           <h1 class="title">下单低至5288元】Apple/苹果 iPhone XR 移动联通电信4G</h1>
           <div class="info">
               <p class="price">
                   <span class="now">￥5688</span>
                   <span class="old">￥6000</span>
               </p>
               <p class="sell">
                   <span>热卖中</span>
                   <span>剩余60件</span>
               </p>
           </div>
       </div>
    </div>
</template>

<script>
export default {
    
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

