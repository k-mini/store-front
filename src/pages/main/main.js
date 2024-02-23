import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store/index';
import { router } from './routes/index';


createApp(App)
    .use(store)
    .use(router)
    .mount('#app');