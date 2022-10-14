<script setup lang="ts">
import MioHeader from './components/MioHeader.vue';

</script>

<template>
  <div class="App">
    <div class="header">
      <mio-header />
    </div>
    <div class="view">
      <router-view />      
    </div>
  </div>
</template>

<style lang="less" scoped>
.App {
  .header {    
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 75px;
    background-color: white;
  }
  .view {
    margin: 75px 0 0 0;
  }
}
</style>
