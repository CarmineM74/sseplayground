(function() {
  'use strict';
  angular.module('sseAppApp.interceptors', []).factory('AuthInterceptor', function($q, $rootScope) {
    return {
      'responseError': function(respError) {
        if (respError.status === 401) {
          $rootScope.$broadcast('event:unauthorized');
        }
        return $q.reject(respError);
      }
    };
  }).config(function($httpProvider) {
    return $httpProvider.interceptors.push('AuthInterceptor');
  });

}).call(this);

//# sourceMappingURL=interceptors.js.map
