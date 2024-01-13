<script setup lang="ts">
import { useMainStore } from '@/store';

// Setup

const mainStore = useMainStore();

</script>
<template>
  <div class="row weather-details-section">
    <div class="col">

    </div>
  </div>
  <div>{{ mainStore.weather }}</div>
</template>
