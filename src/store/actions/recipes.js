import recipes from '../../data/drinks.json';

export default {
    FETCH_RECIPES: ({ dispatch, getters }) => {
        let activeFilters = getters.PROP('activeFilters');
        let searchTerm = getters.PROP('searchTerm');
        let results = recipes;
        let relatedRecipes = [];

        if (activeFilters && activeFilters.length > 0) {
            // return exact matches
            activeFilters.map((filter) => {
                results = results.filter((recipe) =>
                    recipe.ingredients.some((c) =>
                        c.ingredient.includes(filter)
                    )
                );
            });
            // if every ingredient in a recipe is included
            // in activeFilters, return that recipe as a "match"
            // otherwise return it as a "near match"
            relatedRecipes = recipes
                .filter((recipe) => {
                    if (
                        recipe.ingredients.every(({ ingredient }) =>
                            activeFilters.includes(ingredient)
                        ) &&
                        !results.includes(recipe)
                    ) {
                        results.push(recipe);
                        return;
                    }
                    return recipe.ingredients.some(({ ingredient }) =>
                        activeFilters.includes(ingredient)
                    );
                })
                .filter((recipe) => !results.includes(recipe));
        }

        if (searchTerm) {
            results = results.filter((recipe) =>
                recipe.title
                    .toLowerCase()
                    .includes(`${searchTerm.toLowerCase()}`)
            );
            relatedRecipes = relatedRecipes.filter((recipe) =>
                recipe.title
                    .toLowerCase()
                    .includes(`${searchTerm.toLowerCase()}`)
            );
        }

        dispatch('PROP', { prop: 'recipes', value: results });
        dispatch('PROP', { prop: 'relatedRecipes', value: relatedRecipes });
    },
};
