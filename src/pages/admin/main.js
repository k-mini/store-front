import { createApp } from 'vue'
import App from './App.vue'
import ChartPlugin from './plugins/ChartPlugin'
import { router } from './routes/index.js';
import { store } from './store/index.js';
import "jquery";

createApp(App)
    .use(ChartPlugin)
    .use(store)
    .use(router)
    .mount('#app');