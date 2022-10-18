<script setup lang="ts">
import MioHeader from './components/header/MioHeader.vue';

</script>

<template>
  <div class="App">
    <mio-header />
    <div class="view">
      <router-view />      
    </div>
  </div>
</template>

<style lang="less" scoped>
@import './common/css/common.less';
.App {
  width: calc(100vw - 20px);
  box-sizing: border-box;
  .view {
    width: 100%;
    margin-top: @HEADERheight;
  }
}
</style>
