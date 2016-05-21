module.exports = function (grunt, SRC_PATH, BUILD_PATH) {
	grunt.loadNpmTasks('grunt-contrib-copy');

	return {
		index: {
			expand: true,
			cwd: SRC_PATH,
			src: 'index.html',
			dest: BUILD_PATH
		},
		fonts: {
			expand: true,
			cwd: SRC_PATH + '/bower_components/material-design-icons/iconfont',
			src: [
				'**/*',
				'!*.css'
			],
			dest: BUILD_PATH
		}
	};
};