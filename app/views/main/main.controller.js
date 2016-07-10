'use strict';

import angular from 'angular';

MainController.$inject = ['peopleService'];

export default function MainController(peopleService) {

    let vm = angular.extend(this, {
        people: []
    });

    init();

    function init() {
        peopleService.getPeople().then(list => vm.people = list);
    }

}
