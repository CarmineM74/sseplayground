angular.module("google-maps.directives.api".ns()).factory("Rectangle".ns(), [
  "Logger".ns(), "GmapUtil".ns(), "IRectangle".ns(), "RectangleParentModel".ns(), function($log, GmapUtil, IRectangle, RectangleParentModel) {
    return _.extend(IRectangle, {
      link: function(scope, element, attrs, mapCtrl) {
        return mapCtrl.getScope().deferred.promise.then((function(_this) {
          return function(map) {
            return new RectangleParentModel(scope, element, attrs, map);
          };
        })(this));
      }
    });
  }
]);
