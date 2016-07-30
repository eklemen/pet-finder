(function() {
  'use strict';

  angular
    .module('ekSites')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(GetPets) {
    var vm = this;
    vm.pets = [];
    vm.location = 'orlando,fl';
    vm.animals = [
        {
            value: 'dog',
            type: 'Dog'
        },
        {
            value: 'cat',
            type: 'Cat'
        },
        {
            value: 'bird',
            type: 'Bird'
        }

    ];

    // vm.byLocation = function(){
    //  GetPets.get({}, function(response){
    //      vm.pets = response;
    //      console.log(response);
    //  })
    // }
    GetPets.byLocation.get({location: vm.location}, function(response){
        vm.pets = response.petfinder.pets.pet;
    });
    
    vm.updateLocation = function(options){
        GetPets.byLocation.get({location: options}, function(response){
            vm.pets = response.petfinder.pets.pet;
        });
    }

    vm.getRandom = function(){
        GetPets.randomPet.get(function(response){
            vm.pets = response.petfinder;
        });
    }

    // want to use this method as a filter for the breeds
    // vm.getBreeds = function(options){
    //     GetPets.getBreeds.get({animal: vm.animalType}, function(response){
    //         console.log(response)
    //         vm.pets = response.petfinder.breeds.breed;
    //     });
    // }
    
  }
})();