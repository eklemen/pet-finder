(function() {
	'use strict';

	angular
		.module('ekSites')
		.run(runBlock);

	/** @ngInject */
	function runBlock($log) {
		$log.info('Thanks for viewing!')
	}

})();
