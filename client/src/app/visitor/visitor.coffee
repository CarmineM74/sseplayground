'use strict'

angular
  .module('saStudyApp.visitor',[
    'ui.router',
    'saStudyApp.visitor.login'
  ])
  .config(($stateProvider) ->
    $stateProvider
      .state('visitor', {
        abstract: true
        template: '<ui-view/>'
      })
      .state('visitor.login', {
        url: '/login'
        templateUrl: 'visitor/login/login.tpl.html'
        controller: 'LoginController as ctrl'
      })
  )
