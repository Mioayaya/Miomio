<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCounterStore } from '../../../store/pinia/counter';

const store = useCounterStore();
const { name, count, doubleCount } = storeToRefs(store);
const { increment } = store;

</script>

<template>
  <div class="test1">
    <h1>test1</h1>
    <h2>{{name}}</h2>
    <h2>{{count}}</h2>
    <h2>{{doubleCount}}</h2>
    <button @click="increment">*2</button>
  </div>
</template>

<style lang="less" scoped>

</style>
