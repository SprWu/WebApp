<template>
  <div>
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
    <h3>HomeContainer</h3>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
    .swipe{
        height: 200px;
    }
</style>

