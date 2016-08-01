// (function() {
//   'use strict';
  
//   describe('directive navbar', function() {
//     var $window;
//     var vm;
//     var el;
//     var timeInMs;

//     beforeEach(module('ekSites'));
//     beforeEach(inject(function($compile, $rootScope) {
//       el = angular.element('<acme-navbar creation-date="' + timeInMs + '"></acme-navbar>');

//       $compile(el)($rootScope.$new());
//       $rootScope.$digest();
//       vm = el.isolateScope().vm;
//       ctrl = el.controller('acmeNavbar');
//     }));

//     it('should be compiled', function() {
//       expect(el.html()).not.toEqual(null);
//     });

//   });
// })();
