(function() {
  'use strict';

  angular
    .module('ekSites')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
