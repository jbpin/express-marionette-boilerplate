var views = require('../view');

function displayContact(){
  var contacts = this.app.request("contact:entities");
  var view = new views.contact.ContactsView({collection:contacts});
  this.region.show(view);
}

module.exports = {
  displayContact: displayContact
};