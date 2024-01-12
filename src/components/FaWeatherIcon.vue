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
  width: {
    type: Number || String,
    required: false,
    default: 50,
  },
});

const faIconClassName = computed(() => Object.prototype.hasOwnProperty.call(iconsDict, props.icon) ? iconsDict[props.icon] : '');
</script>
<template>
  <i 
    v-if="props.icon && faIconClassName" 
    :class="faIconClassName"
    :title="props.alt" 
    :width="props.width"
  />
</template>
<style lang="scss">
// .fa-icon {
//   display: inline-block;
// }
</style>