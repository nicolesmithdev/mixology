<template>
    <li>
        <input
            v-model="checkbox"
            type="checkbox"
            :id="value.toLowerCase()"
            :value="value"
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
    computed: {
        activeFilters() {
            return this.$store.getters.PROP('activeFilters');
        },
        checkbox: {
            get() {
                return (
                    this.activeFilters &&
                    this.activeFilters.includes(this.value)
                );
            },
            set(value) {
                this.$store.dispatch('TOGGLE_FILTER', {
                    checked: value,
                    filter: this.value,
                });
            },
        },
    },
};
</script>
