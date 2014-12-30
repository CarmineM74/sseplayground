define(['layout/module'], function (module) {

    'use strict';

    module.registerDirective('reloadState', ["$rootScope", function ($rootScope) {
        return {
            restrict: 'A',
            compile: function (tElement, tAttributes) {
                tElement.removeAttr('reload-state data-reload-state');
                tElement.on('click', function (e) {
                    $rootScope.$state.transitionTo($rootScope.$state.current, $rootScope.$stateParams, {
                        reload: true,
                        inherit: false,
                        notify: true
                    });
                    e.preventDefault();
                })
            }
        }
    }]);
});
