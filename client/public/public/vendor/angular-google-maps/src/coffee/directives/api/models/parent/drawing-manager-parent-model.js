angular.module('uiGmapgoogle-maps.directives.api.models.parent').factory('uiGmapDrawingManagerParentModel', [
  'uiGmapLogger', '$timeout', function($log, $timeout) {
    var DrawingManagerParentModel;
    return DrawingManagerParentModel = (function() {
      function DrawingManagerParentModel(scope, element, attrs, map) {
        var drawingManager;
        this.scope = scope;
        this.attrs = attrs;
        this.map = map;
        drawingManager = new google.maps.drawing.DrawingManager(this.scope.options);
        drawingManager.setMap(this.map);
        if (this.scope.control != null) {
          this.scope.control.getDrawingManager = function() {
            return drawingManager;
          };
        }
        if (!this.scope["static"] && this.scope.options) {
          this.scope.$watch('options', function(newValue) {
            return drawingManager != null ? drawingManager.setOptions(newValue) : void 0;
          }, true);
        }
        scope.$on('$destroy', function() {
          drawingManager.setMap(null);
          return drawingManager = null;
        });
      }

      return DrawingManagerParentModel;

    })();
  }
]);
