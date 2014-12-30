define(['angular', 'angular-couch-potato', 'angular-ui-router', 'angular-resource'], function(ng, couchPotato) {
  'use strict';
  var module;
  module = ng.module('app.dashboard', ['ui.router', 'ngResource']);
  module.config(function($stateProvider, $couchPotatoProvider) {
    return $stateProvider.state('app.dashboard', {
      url: '/dashboard',
      views: {
        "content@app": {
          controller: 'DashboardCtrl',
          templateUrl: 'app/dashboard/dashboard.html',
          resolve: {
            deps: $couchPotatoProvider.resolveDependencies(['dashboard/DashboardCtrl'])
          }
        }
      },
      data: {
        title: 'Dashboard'
      }
    });
  });
  couchPotato.configureApp(module);
  module.run(function($couchPotato) {
    return module.lazy = $couchPotato;
  });
  return module;
});
