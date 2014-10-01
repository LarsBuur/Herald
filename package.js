Package.describe({
  summary: "A Universal Notifications Engine",
  version: "0.3.0",
  git: "https://github.com/Meteor-Reaction/notifications.git",
  name: 'kestanous:notifications'
});

Package.onUse(function(api) {
  
  api.use(['standard-app-packages']); //TODO: reduce this to the minimum requirements.

  //if iron route is present add 'seen route' logic
  api.use('iron:router', {week: true}); 
  //if user-status is present add online/idle logic
  api.use('mizzao:user-status', {week: true}); 

  api.addFiles('lib/notifications.js');

  api.addFiles('lib/client.js', 'client');

  api.addFiles(['lib/server.js', 'lib/escalate.js'], 'server');

  api.export(['Notifications']);
});