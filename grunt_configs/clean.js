module.exports = function (grunt, SRC_PATH, BUILD_PATH) {
	grunt.loadNpmTasks('grunt-contrib-clean');

	return {
		build: [BUILD_PATH, '.tmp']
	};
};
