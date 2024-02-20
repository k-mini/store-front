import {
    postLogin,
    fetchCategories,
    fetchBoardLists,
} from '../api/index';

export default {

    async POST_LOGIN() {
        const response = await postLogin();
        return response;
    },
    async FETCH_CATEGORIES(context) {
        const response = await fetchCategories();
        context.commit('SET_CATEGORIES', response.data);
        return response;
    },
    async GET_BOARDLISTS(context, { category, subCategory }) {
        // console.log('GET_BOARDLISTS 시작');
        const response = await fetchBoardLists(category, subCategory);
        // console.log(response);
        console.log(response.data);
        // console.log(response.data.page.content.length);
        // context.commit('SET_TITLE', response.data);
        context.commit('SET_PAGERESULTS', response.data);
        return response;
    }

}