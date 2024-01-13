import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { getCurrentTimeWithoutOffset } from '@/helpers/converters';
import type { IOpenWeatherData } from '@/helpers/interfaces';



export const useMainStore = defineStore('main', () => {
  const city = ref('Poznań');
  const loading = ref(false);
  const weather = ref<IOpenWeatherData | null>(null);
  
  const sunrise = computed(() => weather.value?.sys.sunrise || 'n/a');
  const sunset = computed(() => weather.value?.sys.sunset || 'n/a');
  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }
  const utcTimeNow = ref(getCurrentTimeWithoutOffset());

  return { city, loading, weather, utcTimeNow, sunrise, sunset }
});