var contact = require('./models/contact');
var Controller = require('./controllers');

function ContactModule(module, app, backbone, Marionette, $, _){
  module.on("before:start", function(){
    console.log('Contact module will start');
  });

  module.Router = Marionette.AppRouter.extend({
    appRoutes: {
      "": "displayContact"
    }
  });

  module.addInitializer(function(){
    var c = new Controller({
      region: app.mainRegion
    });
    new module.Router({
      controller : c
    });
  });
}

module.exports = ContactModule;