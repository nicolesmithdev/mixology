export default {
    MUTATE: (state, { prop, value }) => {
        state[prop] = value;
    },
    MUTATE_KEY: (state, { prop, key, value }) => {
        state[prop] = { ...state[prop], [key]: value };
    },
    MUTATE_PROP_KEY_PUSH: (state, { prop, key, value }) => {
        state[prop][key].push(value);
    },
    MUTATE_PUSH: (state, { prop, value }) => {
        state[prop].push(value);
    },
    MUTATE_SPLICE: (state, { prop, value }) => {
        const index = state[prop].indexOf(value);
        state[prop].splice(index, 1);
    },
    MUTATE_PROP_KEY_SPLICE: (state, { prop, key, value }) => {
        const index = state[prop][key].indexOf(value);
        state[prop][key].splice(index, 1);
    },
};
