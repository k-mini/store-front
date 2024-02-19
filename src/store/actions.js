import { 
    postLogin,
    fetchCategories,
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
    }

}