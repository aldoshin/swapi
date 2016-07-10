'use strict';

import angular from 'angular';

function PersonCardController(favoritesService) {
    let vm = angular.extend(this, {
        removeFromFavorites,
        addFavorites,
        clearError
    });

    function addFavorites() {
        favoritesService
            .addTofavorites(vm.person)
            .catch(() => vm.error = 'Cannot add more items to favorites');
    }

    function removeFromFavorites() {
        favoritesService.removeFromFavorites(vm.person);
    }

    function clearError() {
        delete vm.error;
    }
}

export default function swPersonCard() {
    return {
        scope: {},
        restrict: 'E',
        template: require('./person-card.template.html'),
        controller: PersonCardController,
        controllerAs: 'ctrl',
        bindToController: {
            person: '='
        }
    };
}
