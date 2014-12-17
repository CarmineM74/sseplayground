angular.module("uiGmapgoogle-maps.directives.api").factory("uiGmapCircle", [
  "uiGmapICircle", "uiGmapCircleParentModel", function(ICircle, CircleParentModel) {
    return _.extend(ICircle, {
      link: function(scope, element, attrs, mapCtrl) {
        return mapCtrl.getScope().deferred.promise.then((function(_this) {
          return function(map) {
            return new CircleParentModel(scope, element, attrs, map);
          };
        })(this));
      }
    });
  }
]);
