(function() {
	'use strict';

	angular
		.module('ekSites')
		.config(config);

	/** @ngInject */
	function config($httpProvider) {
		$httpProvider.defaults.useXDomain = true;
		$httpProvider.defaults.headers.common = {};
		$httpProvider.defaults.headers.post = {};
		$httpProvider.defaults.headers.put = {};
		$httpProvider.defaults.headers.patch = {};
	}

})();
