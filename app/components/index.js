'use strict';

import angular from 'angular';
import swPersonCard from './person-card/person-card.component';

export default angular
    .module('swapi.components', [])
    .directive('swPersonCard', swPersonCard)
    .name;
