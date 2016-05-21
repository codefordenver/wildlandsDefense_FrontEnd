(function () {
	'use strict';

	angular
		.module('wd', [
			'ngAnimate',
			'ngAria',
			'ngMaterial',
			'ngMessages',
			'ui.router',
			'angular-locker',

			'wd.templates',
			'wd.home'
		])
		.config(['$compileProvider', function ($compileProvider) {
			$compileProvider.debugInfoEnabled(false);
		}]);
})();
