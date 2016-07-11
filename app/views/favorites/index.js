'use strict';

import favoritesRoute from './favorites.route';
import FavoritesController from './favorites.controller.js';

export default function favoritesView(ngModule) {
    ngModule
        .controller('FavoritesController', FavoritesController)
        .config(favoritesRoute);
}
