'use strict';

import angular from 'angular';
import peopleService from './people/people.service';

export default angular
    .module('swapi.services', [])
    .factory('peopleService', peopleService)
    .name;
