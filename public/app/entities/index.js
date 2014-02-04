var contact = require('./contact');

function EntitiesModule(Entities, App, Backbone, Marionette, $, _){

  var contactController = new contact.ContactController();

  App.reqres.setHandler('contact:entities', function(){
    return contactController.getContacts();
  });
  App.reqres.setHandler('contact:new', function(name){
    return contactController.addContact(name);
  });

}

module.exports = EntitiesModule;