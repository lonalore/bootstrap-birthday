module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({

    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*!\n' +
    ' * Bootstrap-birthday v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
    ' *\n' +
    ' * Licensed under <%= pkg.license %> (https://github.com/lonalore/bootstrap-birthday/blob/master/LICENSE)\n' +
    ' */\n',

    // Task configuration.

    clean: {
      js: 'dist'
    },

    concat: {
      options: {
        banner: '<%= banner %>'
      },
      main: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'dist/<%= pkg.name %>.js'
      }
    },

    uglify: {
      options: {
        banner: '<%= banner %>',
        preserveComments: 'some'
      },
      main: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'dist/<%= pkg.name %>.min.js',
        options: {
          sourceMap: true,
          sourceMapName: 'dist/<%= pkg.name %>.js.map'
        }
      }
    }

  });

  // Load the plugin that provides the "clean" task.
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Load the plugin that provides the "concat" task.
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // JS distribution.
  grunt.registerTask('build-js', ['clean', 'concat', 'uglify']);

  // Default task.
  grunt.registerTask('default', ['build-js']);

};
