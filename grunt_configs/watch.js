module.exports = function (grunt, SRC_PATH) {
	grunt.loadNpmTasks('grunt-contrib-watch');

	return {
		options: {
			livereload: true  // defaults to port 35729. if this changes to a custom port, it must also be manually changed in index.html
		},
		// js: {
		// 	files: [SRC_PATH + '/scripts/**/!(*spec).js']
		// },
		html: {
			files: [
				SRC_PATH + '/**/*.html',
				'!' + SRC_PATH + '/bower_components/**/*'
			],
			tasks: ['html2js:local']
		}
	};
};
