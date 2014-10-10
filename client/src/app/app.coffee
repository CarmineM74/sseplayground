'use strict'
angular
  .module('saStudyApp', [
    'ui.bootstrap',
    #'ngAnimate',
    'rails',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ng-token-auth',
    'templates-app',
    'templates-common',
    'saStudyApp.visitor'
  ])
  .factory('settings', ($rootScope) ->
    settings = {
      defaultUnauthorizedState: 'visitor.login',
      languages: [
        {
          language: 'Italiano',
          translation: 'Italiano',
          langCode: 'it',
          flagCode: 'it'
        },
        {
          language: 'English',
          translation: 'English',
          langCode: 'en',
          flagCode: 'us'
        }
      ]
    }
    return settings
  )
  .config(($locationProvider,$stateProvider,$urlRouterProvider,$authProvider) ->
    $authProvider.configure({
      apiUrl: '/api'
    })
    $urlRouterProvider.otherwise('/login')
  )
  .run((settings) ->
    settings.currentLang = settings.languages[0] # Default language
  )
  .run(($rootScope, $state,settings) ->
    $rootScope.$on('user:set', -> $state.go('member.home'))
    $rootScope.$on('user:unset', ->
      $state.go(settings.defaultUnauthorizedState)
    )
  )

