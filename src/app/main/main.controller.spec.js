(function() {
	'use strict';

	describe('controllers', function(){
		var vm, scope;

		beforeEach(module('ekSites'));
		
		beforeEach(inject(function($controller, $rootScope) {
			scope = $rootScope.$new();
			vm = $controller("MainController", {$scope: scope});
		}));

		it('should expect location to be orlando,fl', function() {
			expect(vm.location).toEqual('orlando,fl');
		});

	});
})();
