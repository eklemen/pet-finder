(function() {
  'use strict';

  angular
    .module('ekSites')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, GetPets) {
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
    vm.animalType;
    vm.breeds = [];
    vm.breedSelected;

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

    vm.getBreeds = function(options){
        GetPets.getBreeds.get({animal: vm.animalType.toLowerCase()}, function(response){
            vm.breeds = response.petfinder.breeds.breed;
        });
    }

    vm.byBreed = function(options){
        GetPets.byBreed.get({location: vm.location, breed: options}, function(response){
            debugger;
            vm.pets = response.petfinder.pets.pet;
        });
    }
    
  }
})();