var Backbone = require('backbone');

var ContactModel = Backbone.Model.extend({

  // Default attributes
  defaults: {
    id: 1,
    name : 'New Contact'
  },

  // A dummy initialization method
  initialize: function() {
    this.on('change', function(){
      console.log('ContactModel - Values for this model have changed.');
    });
  },

  clear: function() {
    this.destroy();
    this.view.remove();
  }

});

var ContactCollection = Backbone.Collection.extend({
  model: ContactModel
});

module.exports = {
  ContactModel : ContactModel,
  ContactCollection : ContactCollection
};