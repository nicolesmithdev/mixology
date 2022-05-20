<template>
    <div id="sidebar">
        <div id="filters" :class="[hideFilters ? 'hidden' : 'open']">
            <button v-if="activeFilters.length" @click="resetFilters">
                Reset Filters
            </button>
            <FilterGroup
                v-for="filter in filters"
                :key="filter.name"
                :filter="filter"
            />
        </div>
    </div>
</template>

<script>
import filters from '@/data/filters';
import FilterGroup from './FilterGroup';

export default {
    name: 'FiltersList',
    components: {
        FilterGroup,
    },
    data() {
        return {
            filters: filters,
        };
    },
    mounted() {
        window.addEventListener('resize', this.resize.bind(this));
        this.resize();
    },
    unmounted() {
        window.removeEventListener('resize', this.resize.bind(this));
    },
    computed: {
        hideFilters() {
            return this.$store.getters.PROP('hideFilters');
        },
        activeFilters() {
            return this.$store.getters.PROP('activeFilters');
        },
    },
    methods: {
        resize() {
            if (window.innerWidth <= 992) {
                this.$store.dispatch('PROP', {
                    prop: 'hideFilters',
                    value: true,
                });
            }
        },
        resetFilters() {
            this.$store.dispatch('RESET_FILTERS');
        },
    },
};
</script>
