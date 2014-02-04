var Backbone = require('backbone');
var Marionette = require('backbone.marionette');

var ContactView = Backbone.Marionette.ItemView.extend({
  tagName : 'li',
  template: "#tpl-contact",

  initialize: function(){
    // bind the model change to rerender this view
    this.model.on('change', this.render, this);
  },
});

var ContactsView = Backbone.Marionette.CollectionView.extend({
  tagName : 'ul',
  itemView : ContactView,
});

module.exports = {
  ContactView : ContactView,
  ContactsView : ContactsView
};