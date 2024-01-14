import { describe, it, expect } from 'vitest';
import { nextTick } from 'vue';
import { shallowMount } from '@vue/test-utils';
import MainWidget from './../MainWidget.vue';


describe('MainWidget', () => {
  it('renders properly', async () => {
    const wrapper = shallowMount(MainWidget);
    await nextTick();
    expect(wrapper).toBeTruthy();
  });
});
