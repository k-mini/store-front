import { createStore } from 'vuex';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

export const store = createStore({
    state: {
        categories: [],
        categoryMap: {},
        categoryLoaded: false,
        title: "",
        pageResult: {},
        pageDetail: null,
        authentication: null,
        isAuthenticated: false,
    },
    getters,
    actions,
    mutations,
});
