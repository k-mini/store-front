import { createRouter, createWebHistory } from 'vue-router';
import BodyIndex from '../components/container/BodyIndex';
import ChartView from '../components/container/ChartView';
import TableView from '../components/container/TableView';
import UserTable from '../components/container/UserTable';
import BoardTable from '../components/container/BoardTable';
import CommentTable from '../components/container/CommentTable';

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
    ]
})

export { router };