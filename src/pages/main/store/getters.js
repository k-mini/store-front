
export default {
    getCategories(state) {
        return state.categories;
    },
    getCategoryMap(state) {
        return state.categoryMap;
    },
    getAuthentication(state) {
        if (state.authentication == undefined) {
            return {
                userId: '',
                email: '',
                username: '',
                authorities: [],
                userstatus: null,
                thumbnail: null,
                userRole: null,
            }
        }
        else {
            return state.authentication;
        }
    },
    getPageResult(state) {
        return state.pageResult;
    },
    getTitle(state) {
        return state.title;
    },
    getPageDetail(state) {
        return state.pageDetail;
    },
}