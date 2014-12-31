'use strict';

/**
 * @ngdoc overview
 * @name app [smartadminApp]
 * @description
 * # app [smartadminApp]
 *
 * Main module of the application.
 */

define([
    'angular',
    'angular-ui-router',
    'angular-animate',
    'angular-bootstrap',
    'angular-sanitize', // http://myorange.ca/supportforum/question/how-to-completely-remove-chat-module-in-angularjs-version
    'ocLazyLoad',
    'notification'
], function (angular) {
    
    var app = angular.module('app', [
        'oc.lazyLoad',
        'ngSanitize',
        'ngAnimate',
        'ui.router',
        'ui.bootstrap'
        // App
        //'app.auth',
        //'app.layout',
        //'app.dashboard'
    ]);

    app.config(function ($provide, $httpProvider, $ocLazyLoadProvider) {

        $ocLazyLoadProvider.config({
          jsLoader: requirejs,
          debug: true
        });

        console.log('ocLazyLoad configured');

        // Intercept http calls.
        $provide.factory('ErrorHttpInterceptor', function ($q) {
            var errorCounter = 0;
            function notifyError(rejection){
                console.log(rejection);
                $.bigBox({
                    title: rejection.status + ' ' + rejection.statusText,
                    content: rejection.data,
                    color: "#C46A69",
                    icon: "fa fa-warning shake animated",
                    number: ++errorCounter,
                    timeout: 6000
                });
            }

            return {
                // On request failure
                requestError: function (rejection) {
                    // show notification
                    notifyError(rejection);

                    // Return the promise rejection.
                    return $q.reject(rejection);
                },

                // On response failure
                responseError: function (rejection) {
                    // show notification
                    notifyError(rejection);
                    // Return the promise rejection.
                    return $q.reject(rejection);
                }
            };
        });

        // Add the interceptor to the $httpProvider.
        $httpProvider.interceptors.push('ErrorHttpInterceptor');

    });

    app.run(function ($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        // editableOptions.theme = 'bs3';
    });

    return app;
});
