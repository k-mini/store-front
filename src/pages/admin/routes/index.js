import { createRouter, createWebHistory } from 'vue-router';
import BodyIndex from '../components/container/BodyIndex.vue';
import ChartView from '../components/container/ChartView.vue';
import TableView from '../components/container/TableView.vue';
import UserTable from '../components/container/UserTable.vue';
import BoardTable from '../components/container/BoardTable.vue';
import CommentTable from '../components/container/CommentTable.vue';
import StatisticsView from '../components/container/statistics/StatisticsView.vue';

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
        },
        {
            path: "/admin/users",
            name: "users",
            component: UserTable,
        },
        {
            path: "/admin/boards",
            name: "boards",
            component: BoardTable,
        },
        {
            path: "/admin/comments",
            name: "comments",
            component: CommentTable,
        },
        {
            path: "/admin/statistics",
            name: "statisticsIndex",
            redirect: "/admin",
        },
        {
            path: "/admin/statistics/:type",
            name: "statistics",
            component: StatisticsView,
        },
    ]
})

export { router };