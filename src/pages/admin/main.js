import { createApp } from 'vue'
import App from './App.vue'
import ChartPlugin from './plugins/ChartPlugin'
import { router } from './routes/index.js';

createApp(App)
    .use(ChartPlugin)
    .use(router)
    .mount('#app');