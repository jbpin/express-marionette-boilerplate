var views = require('../view');
var models = require('../models');

function displayContact(){
  console.log("Display contact")
  var c = new models.contact.ContactModel();
  var view = new views.Contact({model:c});
  this.region.show(view);
}

module.exports = {
  displayContact: displayContact
};