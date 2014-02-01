var Backbone = require('backbone');
var Marionette = require('backbone.marionette');

var ContactView = Backbone.Marionette.ItemView.extend({
  template: "#tpl-contact",

  initialize: function(){
    // bind the model change to rerender this view
    this.model.on('change', this.render, this);
  },
});

module.exports = ContactView;