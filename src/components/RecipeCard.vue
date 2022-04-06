<template>
    <div class="recipe">
        <h2 v-html="recipe.title" />
        <ul>
            <li
                v-for="{ ingredient, amount } in recipe.ingredients"
                :key="ingredient"
            >
                {{ ingredient }} {{ amount }}
            </li>
        </ul>
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
    },
};
</script>
