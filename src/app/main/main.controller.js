(function() {
  'use strict';

  angular
    .module('ekSites')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(GetPets) {
    var vm = this;
    vm.pets = [];
    vm.location = 'orlando,fl'

    // vm.byLocation = function(){
    // 	GetPets.get({}, function(response){
    // 		vm.pets = response;
    // 		console.log(response);
    // 	})
    // }
	GetPets.byLocation.get({location: vm.location}, function(response){
		console.log(response)
		vm.pets = response.petfinder.pets.pet
	});
	
    vm.updateLocation = function(options){
    	debugger;
    	GetPets.byLocation.get({location: options}, function(response){
    		console.log(response)
			vm.pets = response.petfinder.pets.pet
    	});
    }
    
  }
})();