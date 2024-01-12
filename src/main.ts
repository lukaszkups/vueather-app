import './assets/main.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from '@/App.vue';
import OwIcon from '@/components/OpenWeatherIcon.vue';
import FaIcon from '@/components/FaWeatherIcon.vue';

const app = createApp(App);

app.component('OwIcon', OwIcon);
app.component('FaIcon', FaIcon);

app.use(createPinia());

app.mount('#app');
