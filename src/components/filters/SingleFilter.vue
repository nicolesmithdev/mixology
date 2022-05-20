<template>
    <li>
        <input
            type="checkbox"
            :id="value.toLowerCase()"
            :value="value"
            @change="toggleFilter"
        />
        <label :for="value.toLowerCase()">{{ value }}</label>
    </li>
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            required: true,
        },
    },
    methods: {
        toggleFilter(e) {
            const payload = {
                prop: 'activeFilters',
                value: e.target.value,
            };
            let action = e.target.checked ? 'PROP_PUSH' : 'PROP_SPLICE';
            this.$store.dispatch(action, payload).then(() => {
                this.$store.dispatch('FETCH_RECIPES');
            });
        },
    },
};
</script>
