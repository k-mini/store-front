import {
    postLogin,
    fetchCategories,
    fetchBoardLists,
} from '../api/index';
import { router } from '../routes/index';
import ListItem from '../components/body/ListItem.vue';
import BoardDetail from '../components/body/BoardDetail.vue';

export default {

    async POST_LOGIN() {
        const response = await postLogin();
        return response;
    },
    async FETCH_CATEGORIES(context) {
        const response = await fetchCategories();
        context.commit('SET_CATEGORIES', response.data);
        router.addRoute({
            path: '/boards/:categoryName/:subCategoryName',
            name: 'categories',
            component: ListItem,
            beforeEnter: (to, from, next) => {
                console.log(to);
                console.log(from);

                next();
            }
        });
        router.addRoute({
            path: '/board/:categoryName/:subCategoryName/:id',
            name: 'boardetail',
            component: BoardDetail,
            beforeEnter: (to, from, next) => {
                console.log(to);
                console.log(from);

                next();
            }
        });
        return response;
    },
    async GET_BOARDLISTS(context, { category, subCategory }) {
        // console.log('GET_BOARDLISTS 시작');
        const response = await fetchBoardLists(category, subCategory);
        // console.log(response);
        // console.log(response.data);
        // console.log(response.data.page.content.length);
        context.commit('SET_PAGERESULTS', response.data);
        return response;
    }

}