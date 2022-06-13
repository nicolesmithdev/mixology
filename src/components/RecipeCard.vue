<template>
    <div class="recipe">
        <h2 v-html="recipe.title" />
        <div v-if="recipe.rating" class="rating">
            <template v-for="(n, i) in 5" :key="n">
                <svg-icon
                    type="mdi"
                    :path="i + 1 <= recipe.rating ? mdiStar : mdiStarOutline"
                    size="20"
                />
            </template>
        </div>
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
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiStar, mdiStarOutline } from '@mdi/js';

export default {
    name: 'RecipeCard',
    components: {
        SvgIcon,
    },
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
    data() {
        return {
            mdiStar,
            mdiStarOutline,
        };
    },
    computed: {
        activeFilters() {
            return this.$store.getters.PROP('activeFilters');
        },
    },
};
</script>
