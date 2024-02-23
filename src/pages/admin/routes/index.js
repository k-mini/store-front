import { createRouter, createWebHistory } from 'vue-router';
import BodyIndex from '../components/container/BodyIndex';
import ChartView from '../components/container/ChartView';
import TableView from '../components/container/TableView';

let router = createRouter({
    history: createWebHistory(),
    routes: [
        { 
            path: "/admin",
            name: "index",
            component: BodyIndex,
        },
        {
            path: "/admin/charts",
            name: "charts",
            component: ChartView,
        },
        {
            path: "/admin/tables",
            name: "tables",
            component: TableView,
        }
    ]
})

export { router };