'use strict'
angular.module('sseAppApp.interceptors',[])
  .factory('AuthInterceptor', ($q,$rootScope) ->
    {
      'responseError': (respError) ->
        if respError.status is 401
          $rootScope.$broadcast('event:unauthorized')
        $q.reject(respError)
    }
  )
  .config(($httpProvider) ->
    $httpProvider.interceptors.push('AuthInterceptor')
  )
