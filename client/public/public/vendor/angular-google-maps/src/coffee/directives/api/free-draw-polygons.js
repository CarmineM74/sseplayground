
/*
  - Link up Polygons to be sent back to a controller
  - inject the draw function into a controllers scope so that controller can call the directive to draw on demand
  - draw function creates the DrawFreeHandChildModel which manages itself
 */
var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

angular.module('uiGmapgoogle-maps.directives.api').factory('uiGmapApiFreeDrawPolygons', [
  "uiGmapLogger", 'uiGmapBaseObject', "uiGmapCtrlHandle", "uiGmapDrawFreeHandChildModel", function($log, BaseObject, CtrlHandle, DrawFreeHandChildModel) {
    var FreeDrawPolygons;
    return FreeDrawPolygons = (function(_super) {
      __extends(FreeDrawPolygons, _super);

      function FreeDrawPolygons() {
        this.link = __bind(this.link, this);
        return FreeDrawPolygons.__super__.constructor.apply(this, arguments);
      }

      FreeDrawPolygons.include(CtrlHandle);

      FreeDrawPolygons.prototype.restrict = 'EMA';

      FreeDrawPolygons.prototype.replace = true;

      FreeDrawPolygons.prototype.require = '^' + 'uiGmapGoogleMap';

      FreeDrawPolygons.prototype.scope = {
        polygons: '=',
        draw: '='
      };

      FreeDrawPolygons.prototype.link = function(scope, element, attrs, ctrl) {
        return this.mapPromise(scope, ctrl).then((function(_this) {
          return function(map) {
            var freeHand, listener;
            if (!scope.polygons) {
              return $log.error("No polygons to bind to!");
            }
            if (!_.isArray(scope.polygons)) {
              return $log.error("Free Draw Polygons must be of type Array!");
            }
            freeHand = new DrawFreeHandChildModel(map, scope.originalMapOpts);
            listener = void 0;
            return scope.draw = function() {
              if (typeof listener === "function") {
                listener();
              }
              return freeHand.engage(scope.polygons).then(function() {
                var firstTime;
                firstTime = true;
                return listener = scope.$watch('polygons', function(newValue, oldValue) {
                  var removals;
                  if (firstTime) {
                    firstTime = false;
                    return;
                  }
                  removals = _.differenceObjects(oldValue, newValue);
                  return removals.forEach(function(p) {
                    return p.setMap(null);
                  });
                });
              });
            };
          };
        })(this));
      };

      return FreeDrawPolygons;

    })(BaseObject);
  }
]);
