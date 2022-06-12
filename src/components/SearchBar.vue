<template>
    <div id="search-bar">
        <svg-icon
            type="mdi"
            :path="filterIcon"
            size="30"
            @click="toggleFilters"
            class="filter"
        />
        <div class="fieldset">
            <input
                v-model="searchTerm"
                id="search"
                type="text"
                placeholder="Search..."
            />
            <svg-icon
                v-if="searchTerm"
                type="mdi"
                :path="clearIcon"
                size="15"
                @click="clearSearch"
            />
        </div>
    </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiClose, mdiFilterMenu } from '@mdi/js';

export default {
    name: 'SearchBar',
    components: {
        SvgIcon,
    },
    data() {
        return {
            clearIcon: mdiClose,
            filterIcon: mdiFilterMenu,
        };
    },
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
