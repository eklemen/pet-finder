(function() {
'use strict';

angular
  .module('ekSites')
  .directive('petDetail', petDetail);

/** @ngInject */
function petDetail() {
  var directive = {
    restrict: 'E',
    templateUrl: 'app/components/petDetail/pet-detail.html',
    controller: SinglePet,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;

  /** @ngInject */
  function SinglePet($routeParams, GetPets) {
    var vm = this;
    debugger;
    vm.petId = $routeParams.id;
    vm.pet = [];
    vm.test = 'some detail'
    GetPets.singlePet.get({id: vm.petId}, function(response){
        console.log(response);
        vm.pet = response.petfinder.pet;
    });
  }
}

})();