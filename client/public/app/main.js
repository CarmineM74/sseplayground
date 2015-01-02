// Defer AngularJS bootstrap
window.name = "NG_DEFER_BOOTSTRAP!";

define([
    'require',
    'jquery',
    'angular',
    'domReady',

    //'pace',
    'bootstrap',
    'appConfig',
    'app'
    ,'includes'
], function (require, $, angular, domReady) {
    'use strict';

    $.sound_path = appConfig.sound_path;
    $.sound_on = appConfig.sound_on;


    domReady(function (document) {
        angular.bootstrap(document, ['app']);
        angular.resumeBootstrap();
    });
});
