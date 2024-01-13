<script setup lang="ts">
import WeatherWidget from './WeatherWidget.vue';
</script>
<template>
  <div class="main-widget card">
    <weather-widget />
  </div>
</template>
<style lang="scss">
.main-widget {
  border-radius: var(--border-radius-xl);
  padding: var(--size-l) var(--size-l) 0 var(--size-l);
}
</style>
