import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store/index';
import { router } from './routes/index';


var app = createApp(App)
window.app = app;
    app
    .use(store)
    .use(router)
    .mount('#app');