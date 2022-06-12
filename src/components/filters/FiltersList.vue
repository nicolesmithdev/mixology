<template>
    <div id="sidebar">
        <div id="filters" :class="[hideFilters ? 'hidden' : 'open']">
            <button :disabled="disabled" @click="resetFilters">
                <svg-icon type="mdi" :path="resetIcon" size="15" /> Reset
                Filters
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
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiCloseCircle } from '@mdi/js';

export default {
    name: 'FiltersList',
    components: {
        FilterGroup,
        SvgIcon,
    },
    data() {
        return {
            filters: filters,
            resetIcon: mdiCloseCircle,
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
        disabled() {
            return !this.activeFilters.length ? true : false;
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
