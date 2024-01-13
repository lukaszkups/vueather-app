<script setup lang="ts">
import { computed } from 'vue';
import { useMainStore } from '@/store';
import SearchInput from './SearchInput.vue'

// Setup

const mainStore = useMainStore();

// Computed

const tiles = computed(() => {
  return [
    [
      { id: 1, label: 'Sunrise', icon: 'Sunrise', value: mainStore.sunrise },
      { id: 2, label: 'Sunset', icon: 'Sunset', value: mainStore.sunset },
      { id: 3, label: 'Timezone', icon: 'Cog', value: mainStore.selectedTimezone },
    ],
    [
      { id: 4, label: 'Temperature', icon: 'Temp', value: mainStore.weather?.main.temp ? `${Math.floor(mainStore.weather?.main.temp)}°C` : '-' },
      { id: 5, label: 'Feels like', icon: 'Temp', value: mainStore.weather?.main.feels_like ? `${Math.floor(mainStore.weather?.main.feels_like)}°C` : '-' },
      { id: 6 },
    ],
    [
      { id: 7, label: 'Wind', icon: 'Tornado', value: mainStore.weather?.wind.speed ? `${mainStore.weather?.wind.speed} m/s` : '-' },
      { id: 8, label: 'Direction', icon: 'Compass', value: mainStore.currentWindDirection },
      { id: 9 }
    ]
  ]
});
</script>
<template>
  <div class="weather-details-section-wrapper">
    <div class="row weather-details-section search-input-wrapper">
      <div class="col col-detail-tile"></div>
      <div class="col col-detail-tile"></div>
      <div class="col col-detail-tile">
        <search-input />
      </div>
    </div>
    <div 
      v-for="(tilesRow, tilesRowIndex) in tiles"
      :key="tilesRowIndex"
      class="row weather-details-section"
    >
      <div 
        v-for="tile in tilesRow"
        :key="tile.id"
        class="col col-detail-tile"
      >
        <meteo-icon v-if="tile.icon" :icon="tile.icon" />
        <span v-if="tile.label">{{ tile.label }}:</span> {{ tile.value }}
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.weather-details-section {
  vertical-align: middle;
  margin-bottom: var(--size-s);
  
  .meteo-icon {
    margin-right: var(--size-s);
  }

  span {
    display: inline;
    font-weight: 600;
    text-decoration: underline;
  }

  .col-detail-tile {
    min-width: 200px;
  }
}

@media screen and (max-width: 990px) {
  .weather-details-section {
    .col-detail-tile {
      flex: 1;
      max-width: 50%;
      min-width: 50%;

      &:last-of-type:not(:contain(.search-input-wrapper)) {
        display: none;
      }
    }
  }

  .search-input-wrapper {
    .col:nth-child(2) {
      display: none;
    }
  }
}

@media screen and (max-width: 735px) {
  .weather-details-section {
    display: block;
    margin-bottom: 0;

    .col-detail-tile {
      display: block;
      max-width: 100%;
      min-width: 200px;
    }

    &-wrapper {
      margin-bottom: var(--size-l);
    }
  }
}

@media screen and (max-width: 500px) {
  .weather-details-section {
    display: none;
  }
}
</style>