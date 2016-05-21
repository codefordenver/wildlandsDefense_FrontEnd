module.exports = function (grunt, SRC_PATH, BUILD_PATH) {
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	return {
		options: {
			keepBreaks: true,
			keepSpecialComments: 0
		}
	};
};
