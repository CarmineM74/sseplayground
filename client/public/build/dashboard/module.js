define([
    'angular',
    'angular-couch-potato',
    'angular-ui-router',
    'angular-resource'
], function (ng, couchPotato) {
    'use strict';

    var module = ng.module('app.dashboard', [
        'ui.router',
        'ngResource'
    ]);

    module.config(["$stateProvider", "$couchPotatoProvider", function ($stateProvider, $couchPotatoProvider) {
        $stateProvider
            .state('app.dashboard', {
                url: '/dashboard',
                views: {
                    "content@app": {
                        controller: 'DashboardCtrl',
                        templateUrl: 'build/dashboard/dashboard.html',
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
            });
    }]);

    couchPotato.configureApp(module);

    module.run(["$couchPotato", function($couchPotato){
        module.lazy = $couchPotato;
    }]);

    return module;
});
