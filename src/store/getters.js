export default {
    PROP: (state) => (prop) => {
        return state[prop] !== undefined ? state[prop] : false;
    },
};
