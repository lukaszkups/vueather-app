import { describe, it, expect, beforeEach } from 'vitest';
import { nextTick } from 'vue';
import { createPinia, setActivePinia } from 'pinia';
import { useMainStore } from '@/store';
import type { IOpenWeatherData } from '@/helpers/interfaces';

describe('useMainStore', () => {
  let store: ReturnType<typeof useMainStore>;

  beforeEach(() => {
    setActivePinia(createPinia());
    store = useMainStore();
  });

  it('has set initial non-computed values', () => {
    expect(store.city).toBe('Poznań');
    expect(store.loading).toBe(false);
    expect(store.weather).toBeNull();
  });

  it('has properly working computed properties', async () => {
    // Mock weather data for testing
    const mockWeatherData = {
      weather: [{ description: 'Clear' }],
      sys: { sunrise: 1642200000, sunset: 1642240000, timezone: 3600 },
      wind: { deg: 180 },
      timezone: 3600,
    };

    store.weather = mockWeatherData as unknown as IOpenWeatherData;

    await nextTick();
    // Test computed properties
    expect(store.currentWeatherDescription).toBe('Clear');
    expect(store.sunrise).toBe('23:40');
    expect(store.sunset).toBe('10:46');
    expect(store.selectedTimezone).toBe('+1h');
    expect(store.currentWindDirection).toBe('SE');
  });
});
