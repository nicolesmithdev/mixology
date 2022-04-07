<template>
    <h2 v-if="hasActiveFilters">Exact Matches</h2>
    <p v-if="results.length > 0">
        Showing {{ results.length }}
        {{ hasActiveFilters ? 'exact matches' : 'recipes' }}
    </p>
    <p v-else><em>0 exact matches found</em></p>
    <div v-if="results.length > 0" class="recipes">
        <RecipeCard v-for="(recipe, i) in results" :key="i" :recipe="recipe" />
    </div>
    <template v-if="relatedRecipes.length > 0">
        <h2>Near Matches</h2>
        <p>Showing {{ relatedRecipes.length }} near matches</p>
        <div class="recipes">
            <RecipeCard
                v-for="(recipe, i) in relatedRecipes"
                :key="i"
                :recipe="recipe"
                :nearMatch="true"
            />
        </div>
    </template>
</template>

<script>
import RecipeCard from './RecipeCard';

export default {
    components: {
        RecipeCard,
    },
    computed: {
        hasActiveFilters() {
            return this.$store.getters.PROP('activeFilters').length > 0;
        },
        results() {
            return this.$store.getters
                .PROP('recipes')
                .sort((a, b) => (a.title > b.title ? 1 : -1));
        },
        relatedRecipes() {
            return this.$store.getters
                .PROP('relatedRecipes')
                .sort((a, b) => (a.title > b.title ? 1 : -1));
        },
    },
};
</script>
