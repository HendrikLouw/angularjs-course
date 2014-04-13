
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    connect: {
      server: {
        options: {
          port: 9001,
          keepalive: true
        }
      }
    },

    karma: {
      unit: {
        configFile: 'spec/config/karma.conf.js'
      }
    },

    ngtemplates:  {
      Slider: {
        module: 'templates',
        src:  'lib/**/*.html',
        dest: 'templates.js'
      }
    }

  });

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-angular-templates');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Default task(s).
  grunt.registerTask('default', ['ngtemplates', 'karma']);

};
