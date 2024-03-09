
export default {
    SET_CATEGORIES(state, categories) {
        state.categories = categories;
    },
    SET_CATEGORY_LOADED(state) {
        state.categoryLoaded = true;
    },
    SET_TITLE(state, title) {
        state.title = title;
    },
    SET_PAGERESULTS(state, pageResult) {
        state.pageResult = pageResult;
    },
    SET_CATEGORYMAP(state, map) {
        state.categoryMap = map;
    },
    SET_PAGE_DETAIL(state, pageDetail) {
        state.pageDetail = pageDetail
    },
    SET_AUTHENTICATION(state, authentication) {
        state.authentication = authentication;
    },
    IS_AUTHENTICATED(state, value) {
        state.isAuthenticated = value;
    }
}