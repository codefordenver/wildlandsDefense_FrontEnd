(function () {
	'use strict';

	angular
		.module('wd.home')
		.config(WdHomeRoutes);

	WdHomeRoutes.$inject = ['$stateProvider'];

	function WdHomeRoutes($stateProvider) {
		$stateProvider
			.state('wd.home', {
				url: '/home',
				templateUrl: 'home/home.template.html',
				controller: 'HomeCtrl'
			});
	}
})();