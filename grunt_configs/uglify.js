module.exports = function (grunt, SRC_PATH, BUILD_PATH) {
	grunt.loadNpmTasks('grunt-contrib-uglify');

	return {
		options: {
			//screwIE8: true,
			//reserveDOMProperties: true
		},
		build: {
			files: [{
				expand: true,
				cwd: '.tmp/concat', //usemin prepare folder
				src: ['**/*.js'],
				dest: BUILD_PATH + ''
			}]
		}
	};
};
