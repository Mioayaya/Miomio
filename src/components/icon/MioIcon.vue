<script setup lang="ts">
import { styles } from '../../type'

const props = defineProps<{
  title: string
  style?: styles.Mstyles
}>()
</script>

<template>
  <svg class="icon" aria-hidden="true" :style="{...props.style}">
    <use :xlink:href="props.title"></use>
  </svg>
</template>

<style lang="less" scoped>
.icon {
  width: 25px; 
  height: 25px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

</style>
