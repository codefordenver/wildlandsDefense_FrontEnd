// directory where all the dev'ing is done. raw code that is unminified lives here
var SRC_PATH = 'src';
// directory where 'grunt build' will output all of its processed files. all the concated, minified stuff goes here
var BUILD_PATH = 'www';

// directory where all the individual plugin configs are kept
var GRUNT_CONFIGS = './grunt_configs';

module.exports = function (grunt) {
	grunt.initConfig({
		copy: require(GRUNT_CONFIGS + '/copy')(grunt, SRC_PATH, BUILD_PATH),
		concat: require(GRUNT_CONFIGS + '/concat')(grunt, SRC_PATH, BUILD_PATH),
		clean: require(GRUNT_CONFIGS + '/clean')(grunt, SRC_PATH, BUILD_PATH),
		useminPrepare: require(GRUNT_CONFIGS + '/usemin-prepare')(grunt, SRC_PATH, BUILD_PATH),
		usemin: require(GRUNT_CONFIGS + '/usemin')(grunt, SRC_PATH, BUILD_PATH),
		cssmin: require(GRUNT_CONFIGS + '/cssmin')(grunt, SRC_PATH, BUILD_PATH),
		uglify: require(GRUNT_CONFIGS + '/uglify')(grunt, SRC_PATH, BUILD_PATH),
		html2js: require(GRUNT_CONFIGS + '/html2js')(grunt, SRC_PATH, BUILD_PATH),
		shell: require(GRUNT_CONFIGS + '/shell')(grunt, SRC_PATH, BUILD_PATH)
	});

	grunt.registerTask("run", [
		'html2js:local'
	]);

	grunt.registerTask("build", function (platform) {
		var tasks = [
			'html2js:local',
			'clean:build',
			'copy:index',
			'copy:fonts',
			'useminPrepare',
			'concat:generated',
			'cssmin:generated',
			'uglify:generated',
			'usemin'
		];

		switch (platform) {
			case 'ios': tasks.push('shell:runIOS'); break;
			case 'browser': tasks.push('shell:runBrowser'); break;
			default: tasks.push('shell:runIOS'); break;
		}
		
		return grunt.task.run(tasks);
	});
};