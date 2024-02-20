
export default {
    SET_CATEGORIES(state, categories) {
        state.categories = categories;
    },
    SET_TITLE(state, payload) {
        state.title = payload.title;
    },
    SET_PAGERESULTS(state, pageResult) {
        state.pageResult = pageResult;
    }
}