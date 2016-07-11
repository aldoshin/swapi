'use strict';

import angular from 'angular';

FavoritesController.$inject = ['favoritesService'];

export default function FavoritesController(favoritesService) {

    let vm = angular.extend(this, {
        favorites: [],
        updatedList
    });

    init();

    function init() {
        vm.favorites = favoritesService.getFavorites();
    }

    function updatedList(favorites) {
        vm.favorites = favorites;
    }

}
