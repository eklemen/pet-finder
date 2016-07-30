(function() {
  'use strict';

  angular
    .module('ekSites')

    .factory('GetPets', GetPets);

	/** @ngInject */
	function GetPets($resource, $http) {
		var obj = {};
		var baseUrl = 'https://www.petfinder.com/developers/api-docs';
		var apiKey = '1f0c7f48315c13e63b7b7923cacc7959';
		var location = '32817';

		// 'http://api.petfinder.com/pet.find?key=1f0c7f48315c13e63b7b7923cacc7959&location=' + location +'&format=json'

		// obj.fetchAllPets = function(){
		// 	return $http.get('./app/data/data.json');
		// }

		// return obj;

		return {
			byLocation: $resource('http://api.petfinder.com/pet.find?key=1f0c7f48315c13e63b7b7923cacc7959&format=json', {location: '@loc'}, 
				{
					method: 'GET',
					isArray: true	
				}
			)
		}
	}

})();