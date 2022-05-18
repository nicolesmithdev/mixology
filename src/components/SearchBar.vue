<template>
    <div id="search-bar">
        <i class="icon filter" @click="toggleFilters" />
        <div class="fieldset">
            <input
                v-model="searchTerm"
                id="search"
                type="text"
                placeholder="Search..."
            />
            <i class="icon clear" @click="clearSearch" />
        </div>
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
        clearSearch() {
            this.$store
                .dispatch('PROP', { prop: 'searchTerm', value: '' })
                .then(() => {
                    this.$store.dispatch('FETCH_RECIPES');
                });
        },
    },
};
</script>
