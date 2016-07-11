'use strict';

import angular from 'angular';

MainController.$inject = ['peopleService'];

export default function MainController(peopleService) {

    let vm = angular.extend(this, {
        people: [],
        morePeople,
    });

    init();

    function init() {
        peopleService.getPeople().then(list => vm.people = list);
    }

    function morePeople() {
        if (!vm.fetching) {
            vm.fetching = true;
            peopleService.getMorePeople()
                .then(list => vm.people = list)
                .then(() => vm.fetching = false)
                .catch(() => vm.noData = true);
        }
    }

}
