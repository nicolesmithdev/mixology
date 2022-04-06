<template>
    <p>Showing {{ results.length }} recipes</p>
    <div class="recipes">
        <RecipeCard v-for="(recipe, i) in results" :key="i" :recipe="recipe" />
    </div>
</template>

<script>
import RecipeCard from './RecipeCard';

export default {
    components: {
        RecipeCard,
    },
    computed: {
        results() {
            return this.$store.getters
                .PROP('recipes')
                .sort((a, b) => (a.title > b.title ? 1 : -1));
        },
    },
};
</script>
