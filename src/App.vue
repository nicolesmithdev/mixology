<template>
    <div class="container wrap">
        <FiltersList />
        <div class="content">
            <SearchBar />
            <RecipeList />
        </div>
    </div>
</template>

<script>
import FiltersList from './components/FiltersList';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';

export default {
    components: {
        FiltersList,
        SearchBar,
        RecipeList,
    },
};
</script>

<style lang="scss">
@import '@/scss/style.scss';
</style>
