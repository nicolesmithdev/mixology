# Mixology

Mixology is a Vue successor to my React app [Eat The Rainbow](https://github.com/nicolesmithdev/eat-the-rainbow). This app houses my own tried and true cocktail recipes, allowing me to filter by ingredients I have on hand to see which drinks I can craft.

## How to Use

This project was bootstrapped with Vue CLI. It is deployed to GitHub pages and can be found here: https://nicolesmithdev.github.io/mixology/

-   Root directory
    -   `npm install`
    -   `npm run serve`

## Changelog

May 16, 2022

-   Changed
    -   Renamed "Exact Matches" to "Matches"
    -   Improved recipe filtering. Previously a "match" was defined as a recipe that met _every_ active filter, i.e. an exact match. Now a recipe is a "match" if all ingredients can be found in the active filters.

April 7, 2022

-   Split results into "Exact Matches" and "Near Matches"

April 6, 2022

-   Initial commit
