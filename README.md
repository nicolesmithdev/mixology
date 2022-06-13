# Mixology

Mixology is a Vue successor to my React app [Eat The Rainbow](https://github.com/nicolesmithdev/eat-the-rainbow). It is bootstrapped with Vue CLI. This app houses my own tried and true cocktail recipes, allowing me to filter by ingredients I have on hand to see which drinks I can craft.

## How to Use

This app is deployed to GitHub pages and can be found here: https://nicolesmithdev.github.io/mixology/

### Local Setup

Root directory

-   `npm install`
-   `npm run serve`

## Changelog

June 13, 2022

-   Fix: Add additional padding around clear search icon for mobile UX

June 12, 2022

-   UI: Replace SVG icons with Material Design Icons library
-   UI: Show "Reset Filters" button at all type, but add disabled styling when no filters are selected

May 20, 2022

-   Fix: change `some()` to `every()` for exact matches
-   Development: configured Browsersync
-   UI: added "Reset Filters" button

May 18, 2022

-   UI: added clear search icon/functionality
-   Feature: added `npm run deploy` script to deploy to GitHub pages

May 17, 2022

-   Fixed recipe filtering
    -   "exact match" recipes were appearing as duplicate results
    -   search results did not result if filters were set

May 16, 2022

-   Renamed "Exact Matches" to "Matches"
-   Improved recipe filtering. Previously a "match" was defined as a recipe that met _every_ active filter, i.e. an exact match. Now a recipe is a "match" if all ingredients can be found in the active filters.

April 7, 2022

-   Split results into "Exact Matches" and "Near Matches"

April 6, 2022

-   Initial commit
