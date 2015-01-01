define(['angular',
    'ocLazyLoad',
    'angular-ui-router'], function (ng, ocLazyLoad) {

    "use strict";


    var module = ng.module('app.layout', ['ui.router']);


    module.config(function ($stateProvider, $ocLazyLoadProvider, $urlRouterProvider) {


        $stateProvider
            .state('app', {
                abstract: true,
                views: {
                    root: {
                        templateUrl: 'app/layout/layout.tpl.html',
                        resolve: {
                            deps: $couchPotatoProvider.resolveDependencies([
                                'auth/directives/loginInfo'
                            ])
                        }
                    }
                }
            });
        $urlRouterProvider.otherwise('/dashboard');

    });

    module.run(function ($couchPotato) {
        module.lazy = $couchPotato;
    });

    return module;

});
