<script setup lang="ts">
import { testStore } from '../../../store/pinia/test';

const store = testStore();
const { count, name } = store;

</script>

<template>
  <div class="test2">
    <h2>test2</h2>
    <h2>{{name}}</h2>
    <h2>{{count}}</h2>
  </div>
</template>

<style lang="less" scoped>

</style>
