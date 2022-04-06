export default {
    PROP: ({ commit }, { prop, value }) => {
        if (!prop || value === undefined) {
            return false;
        }
        commit('MUTATE', { prop, value });
    },
    PROP_KEY: ({ commit }, { prop, key, value }) => {
        if (!key || value === undefined) {
            return false;
        }
        commit('MUTATE_KEY', { prop, key, value });
    },
    PROP_KEY_PUSH: ({ commit }, { prop, key, value }) => {
        if (!key || value === undefined) {
            return false;
        }
        commit('MUTATE_PROP_KEY_PUSH', { prop, key, value });
    },
    PROP_KEY_SPLICE: ({ commit }, { prop, key, value }) => {
        if (!key || value === undefined) {
            return false;
        }
        commit('MUTATE_PROP_KEY_SPLICE', { prop, key, value });
    },
    PROP_PUSH: ({ commit }, { prop, value }) => {
        if (value === undefined) {
            return false;
        }
        commit('MUTATE_PUSH', { prop, value });
    },
    PROP_SPLICE: ({ commit }, { prop, value }) => {
        if (value === undefined) {
            return false;
        }
        commit('MUTATE_SPLICE', { prop, value });
    },
};
