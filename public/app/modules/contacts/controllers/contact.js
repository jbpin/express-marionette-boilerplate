var Marionette = require('backbone.marionette');
var views = require('../view');
var models = require('../models');

var ContactController = Marionette.Controller.extend({
  initialize: function(options){
    this.region = options.region;
  }
});

ContactController.prototype.displayContact = function(){
  console.log("Display contact");
  var c = new models.contact.ContactModel();
  var view = new views.Contact({model:c});
  this.region.show(view);
};

module.exports = ContactController;