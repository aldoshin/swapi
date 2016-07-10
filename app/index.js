import 'bootstrap/dist/css/bootstrap.css';
import angular from 'angular';

import routing from './config/app-route.config';
import mainView from './views/main/';
import favoritesView from './views/favorites/';

let ngModule = angular
    .module('swapi', [
        require('angular-ui-router')
    ])
    .config(routing);

mainView(ngModule);
favoritesView(ngModule);
