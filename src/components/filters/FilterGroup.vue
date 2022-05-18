<template>
    <div :class="`filter ${filter.name.toLowerCase()}`">
        <h3 v-html="filter.name" />
        <ul>
            <SingleFilter
                v-for="(value, i) in filter.values"
                :key="i"
                :value="value"
            />
        </ul>
    </div>
</template>

<script>
import SingleFilter from './SingleFilter';
export default {
    name: 'FilterGroup',
    components: { SingleFilter },
    props: {
        filter: {
            type: Object,
            required: true,
        },
    },
};
</script>
