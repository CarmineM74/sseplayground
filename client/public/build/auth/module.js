define([
    'angular',
    'ocLazyLoad',
    'angular-ui-router',
    'angular-google-plus',
    'angular-easyfb'
], function (ng) {

    "use strict";

    var module = ng.module('app.auth', [
        'ui.router'
        ,'oc.lazyLoad'
//        ,
//        'ezfb',
//        'googleplus'
    ]);

    var authKeys = {
        googleClientId: '678402726462-ah1p6ug0klf9jm8cplefmphfupg3bg2h.apps.googleusercontent.com',
        facebookAppId: '620275558085318'
    };

    module.config(["$stateProvider", "$ocLazyLoadProvider", function ($stateProvider, $ocLazyLoadProvider
//        , ezfbProvider
//        , GooglePlusProvider
        ) {
//        GooglePlusProvider.init({
//            clientId: authKeys.googleClientId
//        });
//
//        ezfbProvider.setInitParams({
//            appId: authKeys.facebookAppId
//        });

        $ocLazyLoadProvider.config({
          modules: [{
            name: 'app.auth',
            files: [
              'build/auth/models/User.js',
              'build/auth/directives/loginInfo.js',
              'build/auth/login/LoginCtrl.js',
              'build/auth/login/directives/facebookSignin.js',
              'build/auth/login/directives/googleSignin.js'
            ]
          }]
        });

        $stateProvider.state('realLogin', {
            url: '/real-login',

            views: {
                root: {
                    templateUrl: "build/auth/login/login.html",
                    controller: 'LoginCtrl',
                    resolve: {
                        deps: ["$ocLazyLoad", function($ocLazyLoad) {
                          return $ocLazyLoad.load('app.auth')}]
                    }
                }
            },
            data: {
                title: 'Login',
                rootId: 'extra-page'
            }

        })

        .state('login', {
            url: '/login',
            views: {
                root: {
                    templateUrl: 'build/auth/views/login.html'
                }
            },
            data: {
                title: 'Login',
                htmlId: 'extr-page'
            },
            resolve: {
//                deps: $couchPotatoProvider.resolveDependencies([
//                    'modules/forms/directives/validate/smartValidateForm'
//                ])
            }
        })

        .state('register', {
            url: '/register',
            views: {
                root: {
                    templateUrl: 'build/auth/views/register.html'
                }
            },
            data: {
                title: 'Register',
                htmlId: 'extr-page'
            },
            resolve: {
//                deps: $couchPotatoProvider.resolveDependencies([
//                    'modules/forms/directives/validate/smartValidateForm'
//                ])
            }
        })

        .state('forgotPassword', {
            url: '/forgot-password',
            views: {
                root: {
                    templateUrl: 'build/auth/views/forgot-password.html'
                }
            },
            data: {
                title: 'Forgot Password',
                htmlId: 'extr-page'
            },
            resolve: {
//                deps: $couchPotatoProvider.resolveDependencies([
//                    'modules/forms/directives/validate/smartValidateForm'
//                ])
            }
        })

        .state('lock', {
            url: '/lock',
            views: {
                root: {
                    templateUrl: 'build/auth/views/lock.html'
                }
            },
            data: {
                title: 'Locked Screen',
                htmlId: 'lock-page'
            }
        })


    }]).constant('authKeys', authKeys);

    return module;
});
