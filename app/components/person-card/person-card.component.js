'use strict';

import angular from 'angular';

function PersonCardController(favoritesService) {
    let vm = angular.extend(this, {
        removeFromFavorites,
        addFavorites,
        clearError
    });

    vm.onAction = vm.onAction || angular.noop;

    function addFavorites() {
        favoritesService
            .addTofavorites(vm.person)
            .then(favorites => vm.onAction({
                favorites
            }))
            .catch(() => vm.error = 'Cannot add more items to favorites');
    }

    function removeFromFavorites() {
        favoritesService
            .removeFromFavorites(vm.person)
            .then(favorites => vm.onAction({
                favorites
            }));
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
            person: '=',
            onAction: '&?'
        }
    };
}
