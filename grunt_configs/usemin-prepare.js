module.exports = function (grunt, SRC_PATH, BUILD_PATH) {
	grunt.loadNpmTasks('grunt-usemin');

	return {
		options: {
			dest: BUILD_PATH
		},
		app: [SRC_PATH + '/index.html']
	};
};