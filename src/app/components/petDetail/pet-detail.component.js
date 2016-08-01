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
    vm.petId = $routeParams.id;
    vm.pet = [];
    // Once we have the petId, make a call to get info for just that pet
    GetPets.singlePet.get({id: vm.petId}, function(response){
        vm.pet = response.petfinder.pet;
    });
  }
}

})();