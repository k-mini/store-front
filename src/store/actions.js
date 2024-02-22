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
        let map = makeCategoryMap(response.data);
        context.commit('SET_CATEGORIES', response.data);
        context.commit('SET_CATEGORYMAP', map);
        return response;
    },
    async GET_BOARDLISTS(context, { category, subCategory, searchType, searchKeyword, page }) {
        // console.log('GET_BOARDLISTS 시작');
        // console.log(category, subCategory, searchType, searchKeyword, page)

        const response = await fetchBoardLists(category, subCategory, searchType, searchKeyword, page);
        var categoryMap = context.state.categoryMap;

        context.commit('SET_TITLE', categoryMap.get(subCategory.toUpperCase()) + ' 게시판');
        context.commit('SET_PAGERESULTS', response.data);
        return response;
    }

}

function makeCategoryMap(categories) {
    let map = new Map();
    for (var category of categories) {
        map.set(category.categoryName, category.categoryKoName);
        for (var subCategory of category.subCategories) {
            map.set(subCategory.categoryName, subCategory.categoryKoName);
        }
    }
    return map;
}