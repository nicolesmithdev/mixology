<template>
    <div class="container wrap">
        <PWAPrompt />
        <FiltersList />
        <div class="content">
            <SearchBar />
            <RecipeList />
        </div>
    </div>
</template>

<script>
import PWAPrompt from "./components/PWAPrompt.vue";
import FiltersList from "./components/filters/FiltersList.vue";
import SearchBar from "./components/SearchBar.vue";
import RecipeList from "./components/RecipeList.vue";

export default {
    components: {
        PWAPrompt,
        FiltersList,
        SearchBar,
        RecipeList,
    },
};
</script>
