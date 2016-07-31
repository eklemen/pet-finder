(function() {
  'use strict';

  angular
    .module('ekSites')

    .factory('GetPets', GetPets);

	/** @ngInject */
	function GetPets($resource) {
		// var baseUrl = 'https://www.petfinder.com/developers/api-docs';
		// var apiKey = '1f0c7f48315c13e63b7b7923cacc7959';

		return {
			byLocation: $resource('http://api.petfinder.com/pet.find?key=1f0c7f48315c13e63b7b7923cacc7959&format=json', {location: '@loc'}, 
				{
					method: 'GET',
					isArray: true	
				}
			),
			randomPet: $resource('http://api.petfinder.com/pet.getRandom?key=1f0c7f48315c13e63b7b7923cacc7959&format=json&output=full', {}, 
				{
					method: 'GET',
					isArray: true	
				}
			),
			singlePet: $resource('http://api.petfinder.com/pet.get?key=1f0c7f48315c13e63b7b7923cacc7959&format=json', {id: '@id'}, 
				{
					method: 'GET',
					isArray: true	
				}
			),
			getBreeds: $resource('http://api.petfinder.com/breed.list?key=1f0c7f48315c13e63b7b7923cacc7959&format=json', {animal: '@animal'}, 
				{
					method: 'GET',
					isArray: true	
				}
			),
			byBreed: $resource('http://api.petfinder.com/pet.find?key=1f0c7f48315c13e63b7b7923cacc7959&format=json', {location: '@loc', breed: '@breed'}, 
				{
					method: 'GET',
					isArray: true	
				}
			),
			byAnimal: $resource('http://api.petfinder.com/pet.find?key=1f0c7f48315c13e63b7b7923cacc7959&format=json', {location: '@loc', animal: '@animal'}, 
				{
					method: 'GET',
					isArray: true	
				}
			),
		}
	}

})();
