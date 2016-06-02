(function () {
	'use strict';

	angular
		.module('wd')
		.config(WdRoutes);

	WdRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];
	
	function WdRoutes($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('wd', {
				abstract: true,
				template: '<div ui-view></div>'
			});

		$urlRouterProvider
			.otherwise('/home');
	}
})();