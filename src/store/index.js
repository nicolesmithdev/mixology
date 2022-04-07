import { createStore } from 'vuex';

import mutations from './mutations';
import actions from './actions';
import getters from './getters';

import recipes from '../data/drinks.json';

const store = createStore({
    state() {
        return {
            activeFilters: [],
            hideFilters: false,
            recipes: recipes,
            relatedRecipes: [],
            searchTerm: '',
        };
    },
    mutations,
    actions,
    getters,
});

export default store;
