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
    'ngTouch'
  ])
  .config ($routeProvider) ->
    $routeProvider
      .when '/',
        templateUrl: 'views/main.html'
        controller: 'MainCtrl'
      .otherwise
        redirectTo: '/'

