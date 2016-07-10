'use strict';

mainRoute.$inject = ['$stateProvider'];

export default function mainRoute($stateProvider) {
    $stateProvider
        .state('main', {
            url: '/',
            template: require('./main.view.html'),
            // controller: 'MainController',
            // controllerAs: 'mainCtrlr'
        });
}
