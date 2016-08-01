(function() {
  'use strict';

  angular
    .module('ekSites')

    .factory('GetPets', GetPets);

	/** @ngInject */
	function GetPets($resource) {
		// All requests are returned in JSON format as Array

		var baseUrl = 'http://api.petfinder.com/';
		var key = '?key=1f0c7f48315c13e63b7b7923cacc7959&format=json'

		return {
			byLocation: $resource( baseUrl + 'pet.find' + key, {location: '@loc'}, 
				{
					method: 'GET',
					isArray: true	
				}
			),
			randomPet: $resource( baseUrl + 'pet.getRandom' + key + '&output=full', {}, 
				{
					method: 'GET',
					isArray: true	
				}
			),
			singlePet: $resource( baseUrl + 'pet.get' + key, {id: '@id'}, 
				{
					method: 'GET',
					isArray: true	
				}
			),
			getBreeds: $resource( baseUrl + 'breed.list' + key, {animal: '@animal'}, 
				{
					method: 'GET',
					isArray: true	
				}
			),
			byBreed: $resource( baseUrl + 'pet.find' + key, {location: '@loc', breed: '@breed'}, 
				{
					method: 'GET',
					isArray: true	
				}
			),
			byAnimal: $resource( baseUrl + 'pet.find' + key, {location: '@loc', animal: '@animal'}, 
				{
					method: 'GET',
					isArray: true	
				}
			)
		}
	}

})();
