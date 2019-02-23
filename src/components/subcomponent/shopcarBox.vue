<template>
  <div class="mui-numbox" data-numbox-min="1" data-numbox-max="60" style="height:25px">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" value="1" ref="num" @change="change">
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
import mui from "@/lib/mui/js/mui.js";
export default {
  methods: {
    change(){
      
    }
  },
  mounted() {
    mui(".mui-numbox").numbox();
  }
};
</script>

<style scoped>
</style>

