define(['angular', 'ocLazyLoad', 'angular-ui-router', 'angular-resource'], function(ng, couchPotato) {
  'use strict';
  var module;
  module = ng.module('app.dashboard', ['ui.router', 'ngResource']);
  module.config(function($stateProvider, $ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
      modules: [
        {
          name: 'app.dashboard',
          files: ['build/dashboard/DashboardCtrl.js']
        }
      ]
    });
    return $stateProvider.state('app.dashboard', {
      url: '/dashboard',
      views: {
        "content@app": {
          controller: 'DashboardCtrl',
          templateUrl: 'build/dashboard/dashboard.html',
          resolve: {
            deps: function($ocLazyLoad) {
              return $ocLazyLoad.load('app.dashboard');
            }
          }
        }
      },
      data: {
        title: 'Dashboard'
      }
    });
  });
  return module;
});
