import { createStore } from 'vuex';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

export const store = createStore({
    state: {
        categories: [],
        categoryMap: {},
        title: "",
        pageResult: {},
        pageDetail: {},
        authentication: null,
    },
    getters,
    actions,
    mutations,
});
