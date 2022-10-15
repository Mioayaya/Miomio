<script setup lang="ts">

</script>

<template>
  <div class="header">
    <router-link to="/home">home</router-link>
    <router-link to="/test">test</router-link>
  </div>
</template>

<style lang="less" scoped>
@import '../../common/css/common.less';
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: @HEADERheight;
  z-index: 1;
  background-color: red;
}
</style>
