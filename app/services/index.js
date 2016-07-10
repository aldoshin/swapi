'use strict';

import angular from 'angular';
import lodash from 'lodash';
import peopleService from './people/people.service';
import favoritesService from './favorites/favorites.service';

export default angular
    .module('swapi.services', [])
    .constant('_', lodash)
    .factory('peopleService', peopleService)
    .factory('favoritesService', favoritesService)
    .name;
