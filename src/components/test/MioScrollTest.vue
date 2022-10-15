<script setup lang="ts">
import { Ref, ref } from "vue";

let scrollArr:Ref<string[]> = ref<string[]>(['test']);
scrollArr.value.length = 100;
scrollArr.value.fill('test');




</script>

<template>
  <div class="scroll">
    <p v-for="(item,index) in scrollArr" :key="index">
      {{item}}
    </p>
  </div>
</template>

<style lang="less" scoped>

</style>
