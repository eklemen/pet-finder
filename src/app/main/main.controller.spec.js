(function() {
  'use strict';

  describe('controllers', function(){
    var vm;

    beforeEach(module('ekSites'));
    beforeEach(inject(function(_$controller_) {
      vm = _$controller_('MainController');
    }));

    it('should have a timestamp creation date', function() {
      expect(true).toBe(true);
    });
  });
})();
