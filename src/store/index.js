import { createStore } from 'vuex';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

export const store = createStore({
    state: {
        authenticated: false,
        categories: [],
        title: "",
        pageResult: {},
    },
    getters,
    actions,
    mutations,
});
