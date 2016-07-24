/**
 * This is our projects build file
 *
 */
module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		jshint: {
			files: ['src/**/*.js'],
			options: {
				globals: {
					jQuery: true,
					angular: true
				}
			}
		},
		concat: {
			options: {
				seperator: "\n"
			},
			jsFiles: {
				src: ['lib/angular.js', 'lib/angular-*.js', 'lib/*.js', 'src/**/*.js'],
				dest: 'build/contacts.js'
			},
			cssFiles: {
				src: ['stylesheets/*.css'],
				dest: 'build/css/contacts.css'
			}
		},
		clean: {
			build: {
				src: ['build']
			}
		},
		sass: {
			options: {
				sourceMap: true
			},
			dist: {
				files: {
					'stylesheets/layout.css': 'sass/layout.scss'
				}
			}
		},
		uglify: {
			my_target: {
				files: {
					'build/contacts.min.js': 'build/contacts.js'
				}
			}
		},
		watch: {
			options: {
				spawn: false,
				livereload: true
			},
			scripts: {
				files: ['src/**/*.js'],
				tasks: ['jshint', 'concat:jsFiles']
			},
			cssFiles: {
				files: ['sass/**/*.scss'],
				tasks: ['sass', 'concat:cssFiles']
			},
			resources: {
				files: ['resources/**', 'index.html', 'fonts/**', 'templates/**/*.html', 'images/**'],
				tasks: ['copy']
			}
		},
		copy: {
			build: {
				files: [{
					expand: true,
					src: ['index.html', 'images/**', 'templates/**', 'resources/**', 'fonts/**'],
					dest: 'build/'
				}]
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-sass');

	grunt.registerTask('default', ['jshint', 'clean', 'sass', 'concat', 'copy', 'uglify']);
};