(function() {
  'use strict';

  angular
    .module('ekSites')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(GetPets) {
    var vm = this;
    vm.pets = [];

    // vm.byLocation = function(){
    // 	GetPets.get({}, function(response){
    // 		vm.pets = response;
    // 		console.log(response);
    // 	})
    // }

    vm.byLocation = GetPets.byLocation.get({location: '33413'}, function(response){
    	console.log(response)
		vm.pets = response.petfinder.pets.pet
    });

    // var handleSuccess =  function(data, status) {
    // 	vm.pets = data.petfinder.pets.pet;
    // 	console.log(vm.pets);
    // }

    // GetPets.fetchAllPets().success(handleSuccess);
    
  }
})();