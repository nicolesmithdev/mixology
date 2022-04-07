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
            relatedRecipes = results.filter((recipe) =>
                recipe.ingredients.some((c) =>
                    activeFilters.includes(c.ingredient)
                )
            );
            activeFilters.map((filter) => {
                results = results.filter((recipe) =>
                    recipe.ingredients.some((c) =>
                        c.ingredient.includes(filter)
                    )
                );
            });
        }
        dispatch('PROP', { prop: 'recipes', value: results });
        dispatch('PROP', { prop: 'relatedRecipes', value: relatedRecipes });
    },
};
