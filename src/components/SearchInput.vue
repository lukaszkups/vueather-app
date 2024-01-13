<script setup lang="ts">
import { getWeatherData } from '@/services/weather';
import { useMainStore } from '@/store';

// Setup

const mainStore = useMainStore();
const locationQuery = defineModel({ default: '' })

// Methods

const updateLocation = async () => {
  try {
    if (locationQuery.value.length) {
      mainStore.loading = true;
      mainStore.weather = await getWeatherData(locationQuery.value);
      mainStore.city = locationQuery.value;
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
