(function() {
  'use strict';

  angular
    .module('ekSites')

    .factory('GetPets', GetPets);

	/** @ngInject */
	function GetPets($resource, $http) {
		var obj = {};

		obj.fetchAllPets = function(){
			return $http.get('./app/data/data.json');
		}

		return obj;
	}

})();
