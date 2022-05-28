<template>
    <div class="recipe">
        <h2 v-html="recipe.title" />
        <ul>
            <li
                v-for="{ ingredient, amount } in recipe.ingredients"
                :key="ingredient"
                :class="{
                    highlight: nearMatch && activeFilters.includes(ingredient),
                }"
            >
                {{ amount }} {{ ingredient }}
            </li>
        </ul>
        <p v-if="recipe.notes" v-html="recipe.notes" />
    </div>
</template>

<script>
export default {
    name: 'RecipeCard',
    props: {
        recipe: {
            type: Object,
            required: true,
        },
        nearMatch: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
    computed: {
        activeFilters() {
            return this.$store.getters.PROP('activeFilters');
        },
    },
};
</script>
