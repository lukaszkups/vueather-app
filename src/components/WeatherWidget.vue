<script setup lang="ts">
import { onBeforeMount, reactive } from 'vue';
import type { IKeyable } from '@/helpers/interfaces';
import { useMainStore } from '@/store';
import { getWeatherData } from '@/services/weather';

export interface IWeatherWidget {
  weather: IKeyable;
}

const mainStore = useMainStore();

const appData = reactive({
  weather: {},
});

const getWeather = async () => {
  appData.weather = await getWeatherData(mainStore.city)
}

onBeforeMount(async () => {
  mainStore.loading = true;
  await getWeather();
  mainStore.loading = false;
});
</script>
<template>
  <div class="main-widget">
    <div v-if="mainStore.loading">Loading</div>
    <div v-else>{{ appData.weather }}</div>
    <i class="fa-solid fa-umbrella"></i>
    <i class="fa-solid fa-user"></i>
    <div v-if="appData.weather?.weather">
      <fa-icon :icon="appData.weather?.weather[0]?.main" />
      <ow-icon :icon="appData.weather?.weather[0]?.icon" />
    </div>
  </div>
</template>