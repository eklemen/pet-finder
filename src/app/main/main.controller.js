(function() {
  'use strict';

  angular
    .module('ekSites')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(GetPets) {
    var vm = this;
    vm.pets = [];

    var handleSuccess =  function(data, status) {
    	vm.pets = data;
    	console.log(vm.pets);
    }

    GetPets.fetchAllPets().success(handleSuccess);
    
  }
})();