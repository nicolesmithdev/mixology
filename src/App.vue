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
import FiltersList from "./components/filters/FiltersList";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";

export default {
    components: {
        PWAPrompt,
        FiltersList,
        SearchBar,
        RecipeList,
    },
};
</script>
