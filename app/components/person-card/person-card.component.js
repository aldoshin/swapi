'use strict';

function PersonCardController() {

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
