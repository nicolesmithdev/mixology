# Mixology

Mixology is a Vue successor to my React app [Eat The Rainbow](https://github.com/nicolesmithdev/eat-the-rainbow). It is bootstrapped with Vue CLI. This app houses my own tried and true cocktail recipes, allowing me to filter by ingredients I have on hand to see which drinks I can craft.

## How to Use

Root directory

-   `npm install`
-   `npm run serve`

### How to Deploy to GitHub Pages

This app is deployed to GitHub pages and can be found here: https://nicolesmithdev.github.io/mixology/

1. `git checkout --orphan gh-pages`
2. `npm run build`
3. `git --work-tree dist add --all`
4. `git --work-tree dist commit -m "Deploy"`
5. `git push origin HEAD:gh-pages --force`
6. `rm -r dist`
7. `git checkout -f main`
8. `git branch -D gh-pages`

## Changelog

May 17, 2022

-   Fixed recipe filtering. Recipes exactly matching active filters were appearing twice in the results.

May 16, 2022

-   Renamed "Exact Matches" to "Matches"
-   Improved recipe filtering. Previously a "match" was defined as a recipe that met _every_ active filter, i.e. an exact match. Now a recipe is a "match" if all ingredients can be found in the active filters.

April 7, 2022

-   Split results into "Exact Matches" and "Near Matches"

April 6, 2022

-   Initial commit
