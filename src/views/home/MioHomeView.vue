<script setup lang="ts">
import MioScrollTest from '../../components/test/MioScrollTest.vue';

</script>

<template>
  <div class="home">
    <h2>Home Page</h2>
    <MioScrollTest />
  </div>
</template>

<style lang="less" scoped>
@import '../../common/css/common.less';
.home {
  width: 100%;
  text-align: center;
  position: relative;
  .top {
    position: absolute;
    top: -@HEADERheight;
    height: @HEADERheight;
    background-color: aquamarine;
  }
}
</style>
