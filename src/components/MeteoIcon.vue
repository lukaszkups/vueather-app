<script setup lang="ts">
import { computed } from 'vue';
import { iconsDict } from '@/helpers/dictionaries';

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
  size: {
    type: String,
    required: false,
    default: '25px',
  },
});

const meteoIconGlyph = computed(() => Object.prototype.hasOwnProperty.call(iconsDict, props.icon) ? iconsDict[props.icon] : '');

const computedStyle = computed(() => {
  return `font-size: ${props.size};`
});
</script>
<template>
  <i 
    v-if="props.icon && meteoIconGlyph" 
    class="meteo-icon"
    :data-icon="meteoIconGlyph"
    :title="props.alt"
    :style="computedStyle"
  />
</template>
<style lang="scss">
.meteo-icon {
  font-style: normal;
}

[data-icon]:before {
	font-family: 'MeteoconsRegular';
	content: attr(data-icon);
}
</style>