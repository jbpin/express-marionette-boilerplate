var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');

var MainApp = new Backbone.Marionette.Application();

// Modules
MainApp.module('contacts', require('./modules/contacts'));


MainApp.addRegions({
  mainRegion: "#container"
});

MainApp.on('initialize:after', function(){
  Backbone.history.start();
});

MainApp.start();

module.exports = MainApp;