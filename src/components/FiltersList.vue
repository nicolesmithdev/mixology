<template>
    <div id="sidebar">
        <div id="filters" :class="[hideFilters ? 'hidden' : 'open']">
            <FilterGroup
                v-for="filter in filters"
                :key="filter.name"
                :filter="filter"
            />
        </div>
    </div>
</template>

<script>
import filters from '../data/filters';
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
    },
};
</script>
