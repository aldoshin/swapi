'use strict';

import favoritesRoute from './favorites.route';

export default function favoritesView(ngModule) {
    ngModule
        .config(favoritesRoute);
}
