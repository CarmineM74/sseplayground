(function() {
  'use strict';

  /**
    * @ngdoc overview
    * @name sseAppApp
    * @description
    * # sseAppApp
    *
    * Main module of the application.
   */
  angular.module('sseAppApp', ['ngAnimate', 'ngCookies', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch', 'ng-token-auth', 'sseAppApp.interceptors', 'sseAppApp.directives', 'sseAppApp.services', 'sseAppApp.controllers', 'sseAppApp.resources']).config(function($authProvider, $compileProvider) {
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(|blob|):/);
    return $authProvider.configure({
      apiUrl: '/api'
    });
  }).config(function($routeProvider) {
    return $routeProvider.when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      resolve: {
        auth: function($auth) {
          console.log("Checking authorization for / ...");
          return $auth.validateUser().then(function(x) {
            return console.log(JSON.stringify(x));
          });
        }
      }
    }).when('/login', {
      templateUrl: 'views/login.html',
      controller: 'LoginController as ctrl'
    }).otherwise({
      redirectTo: '/login'
    });
  }).run(function($rootScope, $location) {
    return $rootScope.$on('event:unauthorized', function() {
      return $location.path('/login');
    });
  });

}).call(this);

//# sourceMappingURL=app.js.map
