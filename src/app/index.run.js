(function() {
  'use strict';

  angular
    .module('chairYg')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
