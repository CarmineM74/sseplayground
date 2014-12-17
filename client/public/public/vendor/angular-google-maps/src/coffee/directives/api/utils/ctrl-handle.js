angular.module("google-maps.directives.api.utils".ns()).service("CtrlHandle".ns(), [
  '$q', function($q) {
    var CtrlHandle;
    return CtrlHandle = {
      handle: function($scope, $element) {
        $scope.$on('$destroy', function() {
          return CtrlHandle.handle($scope);
        });
        $scope.deferred = $q.defer();
        return {
          getScope: function() {
            return $scope;
          }
        };
      },
      mapPromise: function(scope, ctrl) {
        var mapScope;
        mapScope = ctrl.getScope();
        mapScope.deferred.promise.then(function(map) {
          return scope.map = map;
        });
        return mapScope.deferred.promise;
      }
    };
  }
]);
