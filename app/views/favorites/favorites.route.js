'use strict';

favoritesRoute.$inject = ['$stateProvider'];

export default function favoritesRoute($stateProvider) {
    $stateProvider
        .state('main.favorites', {
            url: 'favorites',
            template: require('./favorites.view.html'),
            // controller: 'MainController',
            // controllerAs: 'mainCtrlr'
        });
}
