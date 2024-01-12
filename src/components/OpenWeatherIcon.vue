<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: false,
    default: 'Icon'
  },
  width: {
    type: Number || String,
    required: false,
    default: 50,
  },
});

const owmIconUrl = computed(() => `http://openweathermap.org/img/wn/${props.icon}@2x.png`)

</script>
<template>
  <img 
    v-if="props.icon" 
    :src="owmIconUrl" 
    :alt="props.alt" 
    class="owm-icon" 
    :width="props.width"
  />
</template>
<style lang="scss">
.owm-icon {
  display: inline-block;
}
</style>