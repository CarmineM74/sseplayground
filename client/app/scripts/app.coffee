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
    'sseAppApp.controllers'
    'sseAppApp.resources'
  ])
  .config ($routeProvider) ->
    $routeProvider
      .when '/',
        templateUrl: 'views/main.html'
        controller: 'MainCtrl'
      .when '/login',
        templateUrl: 'views/login.html'
        controller: 'LoginController as ctrl'
      .otherwise
        redirectTo: '/'

