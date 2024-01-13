import './assets/main.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from '@/App.vue';
import OwIcon from '@/components/OpenWeatherIcon.vue';
import MeteoIcon from '@/components/MeteoIcon.vue';

const app = createApp(App);

app.component('OwIcon', OwIcon);
app.component('MeteoIcon', MeteoIcon);

app.use(createPinia());

app.mount('#app');
