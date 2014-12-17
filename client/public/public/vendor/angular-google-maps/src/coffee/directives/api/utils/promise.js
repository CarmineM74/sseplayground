angular.module('uiGmapgoogle-maps.directives.api.utils').service('uiGmapPromise', [
  '$q', function($q) {
    return {
      defer: function() {
        return $q.defer();
      },
      resolve: function() {
        var d;
        d = $q.defer();
        d.resolve.apply(void 0, arguments);
        return d.promise;
      }
    };
  }
]);
