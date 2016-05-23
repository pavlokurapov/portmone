module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: [{
          'css/style.css': 'sass/style.scss'
        }]
    }
  },
    watch: {
      options: {
        livereload: true
      },
      sass: {
        files: ['sass/*.scss'],
        tasks: ['sass']
      }
    },
    express: {
      all: {
        options: {
          port: 9000,
          hostname: 'localhost',
          bases: ['.'],
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express');
  // Default task(s).
  grunt.registerTask('default', ['express', 'watch']);

};