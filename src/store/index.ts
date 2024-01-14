import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { degreesToWorldDirection, getNiceTime } from '@/helpers/converters';
import { getCurrentTimeWithoutOffset, getYourTimezoneOffset } from '@/helpers/utils';
import type { IOpenWeatherData } from '@/helpers/interfaces';



export const useMainStore = defineStore('main', () => {
  const city = ref('Poznań');
  const loading = ref(false);
  const weather = ref<IOpenWeatherData | null>(null);
  const utcTimeNow = ref(getCurrentTimeWithoutOffset());
  
  // Computed getters

  const currentWeatherDescription = computed(() => {
    if (weather.value?.weather && weather.value?.weather.length) {
      return weather.value.weather[0].description;
    }
    return '-';
  });

  const sunrise = computed(() => {
    if (weather.value?.sys.sunrise) {

      const d = new Date((weather.value.sys.sunrise + weather.value.timezone + getYourTimezoneOffset()) * 1000);
      return getNiceTime(d);
    } else {
      return 'n/a';
    }
  });

  const sunset = computed(() => {
    if (weather.value?.sys.sunset) {
      const d = new Date((weather.value.sys.sunset + weather.value.timezone + getYourTimezoneOffset()) * 1000);
      return getNiceTime(d);
    } else {
      return 'n/a';
    }
  });

  const selectedTimezone = computed(() => {
    if (weather.value?.timezone) {
      return `${weather.value.timezone > 0 ? '+' : ''}${Math.floor(weather.value.timezone/3600)}h`;
    } else {
      return 'n/a';
    }
  });

  const currentWindDirection = computed(() => {
    if (weather.value?.wind && Object.prototype.hasOwnProperty.call(weather.value.wind, 'deg')) {
      return degreesToWorldDirection(weather.value.wind.deg);
    } else {
      return 'n/a';
    }
  });

  return { 
    city, 
    loading, 
    weather, 
    utcTimeNow, 
    currentWeatherDescription, 
    sunrise, 
    sunset, 
    selectedTimezone,
    currentWindDirection
  }
});