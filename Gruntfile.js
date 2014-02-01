module.exports = function(grunt){
  grunt.initConfig({
    browserify: {
      app: {
        options: {
          shim: {
            jquery: {
              path: 'public/bower_components/jquery/jquery.min.js',
              exports: '$'
            },
            underscore: {
              path: 'public/bower_components/underscore/underscore-min.js',
              exports: '_'
            },
            backbone: {
              path: 'public/bower_components/backbone/backbone-min.js',
              exports: 'Backbone',
              depends: {
                underscore: 'underscore'
              }
            },
            'backbone.babysitter': {
              path: 'public/bower_components/backbone.babysitter/lib/backbone.babysitter.min.js',
              exports: 'Backbone.Babysitter',
              depends: {
                backbone: 'Backbone'
              }
            },
            'backbone.wreqr': {
              path: 'public/bower_components/backbone.wreqr/lib/backbone.wreqr.min.js',
              exports: 'Backbone.Wreqr',
              depends: {
                backbone: 'Backbone'
              }
            },
            'backbone.marionette': {
              path: 'public/bower_components/backbone.marionette/lib/backbone.marionette.min.js',
              exports: 'Marionette',
              depends: {
                jquery: '$',
                backbone: 'Backbone',
                underscore: '_'
              }
            }
          }
        },
        src: ['public/app/app.js'],
        dest: 'public/js/built.js'
      }
    },

    watch : {
      browserify : {
        files: ['public/app/**/*.js'],
        tasks: ['browserify'],
      }
    }
  });
  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['browserify']);
};