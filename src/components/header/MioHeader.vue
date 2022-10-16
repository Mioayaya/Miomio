<script setup lang="ts">
import { Ref, ref } from 'vue';
import { styles } from '../../type';
import MioIcon from '../icon/MioIcon.vue';
const iconStyle:Ref<styles.Mstyles> = ref<styles.Mstyles>({
  width: '20px',
  height: '20px'
})

</script>

<template>
  <div class="header">
    <router-link to="/home">home</router-link>
    <router-link to="/test">test</router-link>
    <mio-icon title="#icon-bilibili1" :style="iconStyle"/>
    <mio-icon title="#icon-bilibili" />
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
  background-color: #f0cccc;
}
</style>
