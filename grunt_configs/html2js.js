module.exports = function (grunt, SRC_PATH, BUILD_PATH) {
	grunt.loadNpmTasks('grunt-html2js');

	return {
		options: {
			module: 'wd.templates',
			singleModule: true,
			base: SRC_PATH,
			htmlmin: {
				collapseBooleanAttributes: true,
				collapseWhitespace: true,
				removeAttributeQuotes: true,
				removeComments: true,
				removeEmptyAttributes: true,
				removeRedundantAttributes: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true
			}
		},
		local: {
			src: [
				SRC_PATH + '/**/*.html',
				SRC_PATH + '/!bower_components/**/*',
				'!' + SRC_PATH + '/index.html'
			],
			dest: SRC_PATH + '/wd.templates.js'
		}
	};
};