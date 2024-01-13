<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { useMainStore } from './store';
import { getQueryParameter } from '@/helpers/utils';
import MainWidget from './components/MainWidget.vue';
import ToastNotifications from './components/ToastNotifications.vue';

// Setup

const mainStore = useMainStore();

// Lifecycle

onBeforeMount(() => {
  const location = getQueryParameter('city');
  if (location) {
    mainStore.city = location;
  }
});
</script>
<template>
  <main-widget />
  <toast-notifications />
</template>