define(['angular',
    'ocLazyLoad',
    'angular-ui-router'], function (ng, ocLazyLoad) {

    "use strict";


    var module = ng.module('app.layout', ['ui.router']);


    module.config(["$stateProvider", "$ocLazyLoadProvider", "$urlRouterProvider", function ($stateProvider, $ocLazyLoadProvider, $urlRouterProvider) {

        $stateProvider
            .state('app', {
                abstract: true,
                views: {
                    root: {
                        templateUrl: 'build/layout/layout.tpl.html',
                        resolve: {
                            deps: ["$ocLazyLoad", function($ocLazyLoad) {
                              return $ocLazyLoad.load('app.auth')
                            }] 
                        }
                    }
                }
            });
        $urlRouterProvider.otherwise('/dashboard');

    }]);

    return module;

});
