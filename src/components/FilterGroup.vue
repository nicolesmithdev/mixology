<template>
    <div :class="`filter ${filter.name.toLowerCase()}`">
        <h3 v-html="filter.name" />
        <ul>
            <li v-for="(value, i) in filter.values" :key="i">
                <input
                    type="checkbox"
                    :id="value"
                    :value="`${filter.name}.${value}`"
                    @change="toggleFilter"
                />
                <label :for="value">{{ value }}</label>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'FilterGroup',
    props: {
        filter: {
            type: Object,
            required: true,
        },
    },
    computed: {
        recipes() {
            return this.$store.getters.PROP('recipes');
        },
    },
    methods: {
        toggleFilter(e) {
            const key = e.target.value.split('.')[0].toLowerCase(); // i.e. alcohol
            const value = e.target.value.split('.')[1]; // i.e. Tequila
            const payload = {
                prop: 'activeFilters',
                key,
                value,
            };

            let action = e.target.checked ? 'PROP_PUSH' : 'PROP_SPLICE';
            this.$store.dispatch(action, payload).then(() => {
                this.$store.dispatch('FETCH_RECIPES');
            });
        },
    },
};
</script>
