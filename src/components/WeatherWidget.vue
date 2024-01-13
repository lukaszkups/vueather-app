<script setup lang="ts">
import { computed, onBeforeMount, onBeforeUnmount, reactive } from 'vue';
import { useMainStore } from '@/store';
import { getWeatherData } from '@/services/weather';
import { parseUnixToLocalTime, getCurrentTimeWithoutOffset, getNiceTime } from '@/helpers/converters';
import WeatherDetailsSection from './WeatherDetailsSection.vue';

// Setup

export interface IWeatherWidget {
  timeInterval?: Number;
  loading: boolean;
}

const mainStore = useMainStore();

const appData = reactive({
  timeInterval: 0,
  loading: false,
});

// Computed

const currentTime = computed(() => {
  if (mainStore.weather?.timezone) {
    return getNiceTime(parseUnixToLocalTime(getCurrentTimeWithoutOffset(), mainStore.weather?.timezone));
  } else {
    return getNiceTime(mainStore.utcTimeNow);
  }
});

const currentWeather = computed(() => {
  return mainStore.weather?.weather[0].main || 'noData';
});

const currentOpenWeatherIcon = computed(() => {
  return mainStore.weather?.weather[0].icon || ''
});

// Methods

const getWeather = async () => {
  mainStore.weather = await getWeatherData(mainStore.city)
}

const startTimeInterval = () => {
  appData.timeInterval = setInterval(() => {
    mainStore.utcTimeNow = getCurrentTimeWithoutOffset();
  }, 60000);
}

const clearTimeInterval = () => {
  clearInterval(appData.timeInterval);
}

// Lifecycle

onBeforeMount(async () => {
  startTimeInterval();
  mainStore.loading = true;
  await getWeather();
  mainStore.loading = false;
});

onBeforeUnmount(() => {
  clearTimeInterval();
});
</script>
<template>
  <div class="main-widget">
    <div v-if="appData.loading" class="loading-dots">Loading<span></span></div>
    <div v-else>
      <div class="row">
        <div class="col col--25 col--main-weather-info">
          <h2 class="city-name">
            <!-- Commented out, has been made for testing -->
            <!-- <ow-icon class="h2-ow-icon" :icon="currentOpenWeatherIcon" /> -->
            {{ mainStore.city }}
          </h2>
          <p class="current-time">
            {{ currentTime }}
            <span class="float-right current-weather-description">{{ mainStore.currentWeatherDescription }}</span>
          </p>
          <div class="current-weather-icon-wrapper">
            <span>
              <meteo-icon :icon="currentWeather" size="5rem" />
            </span>
          </div>
        </div>
        <div class="col col--75">
          <weather-details-section />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@keyframes floating {
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-5px);
  }
  75% {
    transform: translateY(5px);
  }
  100% {
    transform: translateY(0);
  }
}

.h2-ow-icon {
  position: absolute;
  margin-left: -40px;
}

.col--main-weather-info {
  width: 225px;
  min-width: 225px;
  max-width: 225px !important;
}

.city-name {
  font-size: 3rem;
  font-weight: 900;
  line-height: 1em;
}

.current-time {
  font-weight: 600;
  font-size: 1rem;
}

.current-weather-description {
  text-transform: capitalize;
  text-align: right;
  margin-left: var(--size-s);
}

.current-weather-icon-wrapper {
  width: 100%;
  text-align: center;
  position: relative;
  overflow: hidden;
  min-height: 10rem;
  margin-top: -15px;

  span {
    overflow: hidden;
    display: inline-block;
  }

  .meteo-icon:not([data-icon=')']) {
    animation: floating 5s ease-in infinite;
    position: absolute;
    margin-left: -40px;
  }
}
</style>