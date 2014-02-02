var controllers = require('./controllers');

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
    new module.Router({
      controller : new controllers.ContactController({
        region: app.mainRegion
      })
    });
  });
}

module.exports = ContactModule;