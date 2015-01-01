define [
  'angular',
  'ocLazyLoad',
  'angular-ui-router',
  'angular-resource'
], (ng, couchPotato) ->
      'use strict'

      module = ng.module('app.dashboard', ['ui.router','ngResource'])

      module.config(($stateProvider, $ocLazyLoadProvider) ->
          $stateProvider
              .state('app.dashboard', {
                  url: '/dashboard',
                  views: {
                      "content@app": {
                          controller: 'DashboardCtrl',
                          templateUrl: 'app/dashboard/dashboard.html',
                          resolve: {
                              deps: $couchPotatoProvider.resolveDependencies([
                                  'dashboard/DashboardCtrl'
                              ])
                          }
                      }
                  },
                  data:{
                        title: 'Dashboard'
                  }
              })
      )

      return module
