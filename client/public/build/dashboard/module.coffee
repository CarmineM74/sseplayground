define [
  'angular',
  'ocLazyLoad',
  'angular-ui-router',
  'angular-resource'
], (ng, couchPotato) ->
      'use strict'

      module = ng.module('app.dashboard', ['ui.router','ngResource'])

      module.config(($stateProvider, $ocLazyLoadProvider) ->

          $ocLazyLoadProvider.config({
            modules: [{
              name: 'app.dashboard'
              files: ['build/dashboard/DashboardCtrl.js']
            }]
          })

          $stateProvider
              .state('app.dashboard', {
                  url: '/dashboard',
                  views: {
                      "content@app": {
                          controller: 'DashboardCtrl',
                          templateUrl: 'build/dashboard/dashboard.html',
                          resolve: {
                              deps: ($ocLazyLoad) -> $ocLazyLoad.load('app.dashboard')
                          }
                      }
                  },
                  data:{
                        title: 'Dashboard'
                  }
              })
      )

      return module
