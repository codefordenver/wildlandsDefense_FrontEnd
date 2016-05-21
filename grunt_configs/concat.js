module.exports = function (grunt, SRC_PATH, BUILD_PATH) {
	grunt.loadNpmTasks('grunt-contrib-concat');

	return {
		options: {
			process: function (src, filepath) {
				if (filepath.match(/\.js$/)) return src + ';\n'; // only apply the separator to js files
				return src;
			}
		},
		build: {
			src: [
				SRC_PATH + '**/*.js',
				'!bower_components/**/*'
			],
			dest: BUILD_PATH + '/app.min.js'
		}
	};
};
