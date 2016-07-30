(function() {
  'use strict';

  angular
    .module('ekSites')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/:id', {
        template: '<pet-detail></pet-detail>'

      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
