'use strict';

import angular from 'angular';
import swPersonCard from './person-card/person-card.component';
import whenScrolled from './when-scrolled/when-scrolled';

export default angular
    .module('swapi.components', [])
    .directive('whenScrolled', whenScrolled)
    .directive('swPersonCard', swPersonCard)
    .name;
