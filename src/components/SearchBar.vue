<template>
    <div id="search-bar">
        <i class="icon filter" @click="toggleFilters" />
        <input
            id="search"
            type="text"
            placeholder="Search..."
            v-model="searchTerm"
        />
    </div>
</template>

<script>
export default {
    name: 'SearchBar',
    computed: {
        searchTerm: {
            get() {
                return this.$store.getters.PROP('searchTerm');
            },
            set(value) {
                this.$store
                    .dispatch('PROP', { prop: 'searchTerm', value })
                    .then(() => {
                        this.$store.dispatch('FETCH_RECIPES');
                    });
            },
        },
    },
    methods: {
        toggleFilters() {
            let currentValue = this.$store.getters.PROP('hideFilters');
            this.$store.dispatch('PROP', {
                prop: 'hideFilters',
                value: !currentValue,
            });
        },
    },
};
</script>
