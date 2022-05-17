import recipes from '../../data/drinks.json';

export default {
    FETCH_RECIPES: ({ dispatch, getters }) => {
        let activeFilters = getters.PROP('activeFilters');
        let searchTerm = getters.PROP('searchTerm');
        let results = recipes;
        let relatedRecipes = [];

        if (searchTerm) {
            results = results.filter((recipe) =>
                recipe.title
                    .toLowerCase()
                    .includes(`${searchTerm.toLowerCase()}`)
            );
        }
        if (activeFilters.length) {
            // returns exact matches
            activeFilters.map((filter) => {
                results = results.filter((recipe) =>
                    recipe.ingredients.some((c) =>
                        c.ingredient.includes(filter)
                    )
                );
            });
            relatedRecipes = recipes
                .filter((recipe) => {
                    // if every ingredient in a recipe is included
                    // in activeFilters, mark that recipe as a "match"
                    if (
                        recipe.ingredients.every(({ ingredient }) =>
                            activeFilters.includes(ingredient)
                        ) &&
                        !results.includes(recipe)
                    ) {
                        results.push(recipe);
                        // otherwise mark it as a "near match"
                    } else {
                        return recipe.ingredients.some(({ ingredient }) =>
                            activeFilters.includes(ingredient)
                        );
                    }
                })
                .filter((recipe) => !results.includes(recipe));
        }
        dispatch('PROP', { prop: 'recipes', value: results });
        dispatch('PROP', { prop: 'relatedRecipes', value: relatedRecipes });
    },
};
