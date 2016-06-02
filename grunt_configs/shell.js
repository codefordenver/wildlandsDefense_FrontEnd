module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-shell');

	return {
		runIOS: 'cordova run ios',
		runBrowser: 'cordova run browser'
	};
};
