'use strict'

angular
  .module('saStudyApp.member',[
    'ui.router',
    'saStudyApp.controllers.language',
    'saStudyApp.services.authorization',
    'saStudyApp.directives.logout',
    'saStudyApp.member.home'
  ])
  .config(($stateProvider) ->
    $stateProvider
      .state('member',{
        abstract: 'true'
        templateUrl: 'member/member.tpl.html'
        resolve: {
          user: (AuthorizationService) ->
            console.log('Validating user in abstract state ...')
            AuthorizationService.validateUser(['loggedIn'])
        }
      })
      .state('member.home',{
        url: '/dashboard'
        templateUrl: 'member/home/dashboard.tpl.html'
        controller: 'DashboardController as ctrl'
      })
  )

