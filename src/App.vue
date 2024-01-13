<script setup lang="ts">
import { onBeforeMount } from 'vue';
import MainWidget from './components/MainWidget.vue';
import { useMainStore } from './store';
import { getQueryParameter } from './helpers/converters';

// Setup

const mainStore = useMainStore();

// Lifecycle

onBeforeMount(() => {
  const location = getQueryParameter('city');
  if (location) {
    mainStore.city = location;
  }
})
</script>
<template>
  <main-widget />
</template>