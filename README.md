# swapi

AngularJS application for SWAPI.

Code written in es2015, using webpack and babel to transpile the code.

Having node installed in the machine run the following commands:

```
1. npm install
2. webpack
3. npm start
4. open browser and go to localhost:8080
```

# Comments

- Project is using Angular 1.5 but I did not use any of the 1.5 features like the components.
- All functions definitions are isolated from the angular definition.
- SWAPI API has only 9 pages of different characters, after querying the last page no more queries are done, we verify this because the API return null for the next URL in the response.
- People services has a cache of people list retrieved.
- Favorites service has the cache to store the characters marked as favorite.

# Infinite Scrolling

The directive code was taken from the web.
