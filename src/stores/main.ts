import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', () => {
  const city = ref('Poznań');
  const loading = ref(false);
  const weather = ref(null);
  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }

  return { city, loading, weather }
});
