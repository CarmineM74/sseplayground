define [
  'angular',
  'angular-couch-potato',
  'angular-ui-router',
  'angular-resource'
], (ng, couchPotato) ->
      'use strict'

      module = ng.module('app.dashboard', ['ui.router','ngResource'])

      module.config(($stateProvider, $couchPotatoProvider) ->
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

      couchPotato.configureApp(module)

      module.run(($couchPotato) ->
                    module.lazy = $couchPotato
      )

      return module
