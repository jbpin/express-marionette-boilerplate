var _ = require('underscore');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');

var Controller = Marionette.Controller.extend({
  initialize: function(options){
    this.region = options.region;
    this.app = options.app;
  }
});

_.extend(Controller.prototype, require('./contact'));

module.exports = Controller;