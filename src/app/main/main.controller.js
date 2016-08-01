(function() {
  'use strict';

  angular
    .module('ekSites')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, GetPets, $location) {
    var vm = this;
    vm.pets = [];

    // location was given a default so users can immediately view a list
    // of animals whithout having to perform any actions.
    vm.location = 'orlando,fl';
    vm.animalType;
    vm.breeds = [];
    vm.breedSelected;
    
    // Vars for sorting results
    vm.sortType = 'name';
    vm.searchName = '';
    vm.sortReverse = false;
    
    // Vars for Pagination directive
    vm.filteredPets = [];
    vm.currentPage = 1;
    vm.numPerPage = 10;
    vm.maxSize = 5;

    vm.animals = [
        {
            value: 'barnyard',
            type: 'Barnyard'
        },
        {
            value: 'bird',
            type: 'Bird'
        },
        {
            value: 'cat',
            type: 'Cat'
        },
        
        {
            value: 'dog',
            type: 'Dog'
        },
        {
            value: 'horse',
            type: 'Horse'
        },
        {
            value: 'pig',
            type: 'Pig'
        },
        {
            value: 'reptile',
            type: 'Reptile'
        }
    ];

    // This is used with the ui-bootstrap pagination directive to keep track of what
    // results show up on each page.
    $scope.$watch('main.currentPage + main.numPerPage', function() {
        var begin = ((vm.currentPage - 1) * vm.numPerPage);
        var end = begin + vm.numPerPage;
        vm.filteredPets = vm.pets.slice(begin, end);
    });


    // We will run this after grabbing the whole list of pets to filter down just
    // the pets to show per page.
    var selectPageGroup = function(){
        var begin = ((vm.currentPage - 1) * vm.numPerPage);
        var end = begin + vm.numPerPage;
        return vm.filteredPets = vm.pets.slice(begin, end);
    }

    // We want to run GetPets when the page loads to give the users a list of
    // pets right away to start viewing.
    GetPets.byLocation.get({location: vm.location}, function(response){
        vm.pets = response.petfinder.pets.pet;
        selectPageGroup();
    });


    // Calls to GetPets factory
    vm.updateLocation = function(options){
        GetPets.byLocation.get({location: options}, function(response){
            vm.pets = response.petfinder.pets.pet;
            selectPageGroup();
        });
    }

    vm.getRandom = function(){
        GetPets.randomPet.get(function(response){
            vm.randomPetId = response.petfinder.pet.id.$t;
            // When selecting a random animal the location needs to change to 
            // show our pets-detail directive since only 1 will be returned
            $location.url(vm.randomPetId);
        });
    }

    vm.getBreeds = function(options){
        GetPets.getBreeds.get({animal: options.toLowerCase()}, function(response){
            vm.breeds = response.petfinder.breeds.breed;
            selectPageGroup();
        });
    }

    vm.byBreed = function(options){
        GetPets.byBreed.get({location: vm.location, breed: options}, function(response){
            vm.pets = response.petfinder.pets.pet;
            selectPageGroup();
        });
    }

    vm.getAnimals = function(options){
        GetPets.byAnimal.get({location: vm.location, animal: options.toLowerCase()}, function(response){
            vm.pets = response.petfinder.pets.pet;
            selectPageGroup();
        });
    }
    
  }
})();