angular.module("uiGmapgoogle-maps.directives.api").factory("uiGmapDrawingManager", [
  "uiGmapIDrawingManager", "uiGmapDrawingManagerParentModel", function(IDrawingManager, DrawingManagerParentModel) {
    return _.extend(IDrawingManager, {
      link: function(scope, element, attrs, mapCtrl) {
        return mapCtrl.getScope().deferred.promise.then(function(map) {
          return new DrawingManagerParentModel(scope, element, attrs, map);
        });
      }
    });
  }
]);
