'use strict'

###*
 # @ngdoc overview
 # @name sseAppApp
 # @description
 # # sseAppApp
 #
 # Main module of the application.
###
angular
  .module('sseAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ng-token-auth',
    'sseAppApp.directives',
    'sseAppApp.services',
    'sseAppApp.controllers',
    'sseAppApp.resources'
  ])
  .config(($authProvider) ->
    $authProvider.configure({
      apiUrl: 'http://localhost:3000/api'
    })
  )
  .config ($routeProvider) ->
    $routeProvider
      .when '/',
        templateUrl: 'views/main.html'
        controller: 'MainCtrl'
        resolve: {
          auth: ($auth) ->
            console.log("Checking authorization for / ...")
            $auth.validateUser().then((x) -> console.log(JSON.stringify(x)))
        }
      .when '/login',
        templateUrl: 'views/login.html'
        controller: 'LoginController as ctrl'
      .otherwise
        redirectTo: '/login'

