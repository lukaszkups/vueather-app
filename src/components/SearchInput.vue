<script setup lang="ts">
import { getWeatherData } from '@/services/weather';
import { useMainStore } from '@/store';
import { ref } from 'vue';

// Setup

const mainStore = useMainStore();
const locationQuery = defineModel({ default: '' });
const lastQuery = ref('');

// Methods

const updateLocation = async () => {
  try {
    // compare lastQuery with input value to not duplicate API call if user hit Enter before
    if (locationQuery.value.length && lastQuery.value !== locationQuery.value) {
      lastQuery.value = locationQuery.value;
      mainStore.loading = true;
      const weatherData = await getWeatherData(locationQuery.value);
      if (weatherData) {
        mainStore.weather = weatherData;
        mainStore.city = locationQuery.value;
      }
      mainStore.loading = false;
    }
  } catch (err) {
    throw new Error(`There was an error when fetching new location weather data: ${err}`);
  }
}
</script>
<template>
  <input 
    v-model="locationQuery"
    type="text"
    placeholder="Search place" 
    class="search-input"
    @blur="updateLocation"
    @keyup.enter="updateLocation"
  />
</template>
<style lang="scss">
.search-input {
  padding: var(--size-s);
  position: relative;
  margin-right: 0;

  &:focus,
  &:active {
    outline: none;
  }
}
</style>
