import { defineStore, } from "pinia";
import { computed, ref } from "vue";

export const testStore = defineStore('test', () => {
  const count = ref(0)
  const name = ref('test')
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, name, doubleCount, increment }
})
