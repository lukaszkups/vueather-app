import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import WeatherWidget from './../WeatherWidget.vue';

describe('WeatherWidget', () => {
  it('renders properly', () => {
    const wrapper = mount(WeatherWidget);
    expect(wrapper.text()).toContain('Hello Vitest');
  });
});
