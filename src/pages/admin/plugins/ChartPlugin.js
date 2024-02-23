import { Chart, registerables} from 'chart.js';

Chart.register(...registerables);

export default {
    install(app) {
        // console.log('chart plugin loaded');
        // vue 2 버전
        // Vue.prototype.$_Chart = Chart;

        // vue 3 버전
        app.config.globalProperties.$_Chart = Chart;
    },
}