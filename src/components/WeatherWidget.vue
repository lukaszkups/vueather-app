<script setup lang="ts">
import { onBeforeMount, reactive } from 'vue';
import type { IKeyable } from '@/helpers/interfaces';
import { useMainStore } from '@/stores/main';
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
    <i class="fa-solid fa-user"></i>
  </div>
</template>