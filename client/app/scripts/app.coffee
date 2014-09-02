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
    'sseAppApp.interceptors',
    'sseAppApp.directives',
    'sseAppApp.services',
    'sseAppApp.controllers',
    'sseAppApp.resources'
  ])
  .config(($authProvider,$compileProvider) ->
    # This is needed to allow links to blobs otherwise marked
    # as unsafe. Under this circumstance, clicking on the link
    # would lead to an error page.
    # http://stackoverflow.com/questions/15606751/angular-changes-urls-to-unsafe-in-extension-page
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(|blob|):/)
    $authProvider.configure({
      apiUrl: '/api'
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

  .run ($rootScope, $location) ->
    $rootScope.$on('event:unauthorized', -> $location.path('/login'))
