var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

angular.module('uiGmapgoogle-maps.directives.api').factory('uiGmapPolygonChildModel', [
  'uiGmapPolygonOptionsBuilder', 'uiGmapLogger', '$timeout', 'uiGmaparray-sync', 'uiGmapGmapUtil', 'uiGmapEventsHelper', function(Builder, $log, $timeout, arraySync, GmapUtil, EventsHelper) {
    var PolygonChildModel;
    return PolygonChildModel = (function(_super) {
      __extends(PolygonChildModel, _super);

      PolygonChildModel.include(GmapUtil);

      PolygonChildModel.include(EventsHelper);

      function PolygonChildModel(scope, attrs, map, defaults, model) {
        var arraySyncer, pathPoints, polygon;
        this.scope = scope;
        this.attrs = attrs;
        this.map = map;
        this.defaults = defaults;
        this.model = model;
        this.listeners = void 0;
        if (angular.isUndefined(scope.path) || scope.path === null || !this.validatePath(scope.path)) {
          $log.error('polygon: no valid path attribute found');
          return;
        }
        pathPoints = this.convertPathPoints(scope.path);
        polygon = new google.maps.Polygon(this.buildOpts(pathPoints));
        if (scope.fit) {
          this.extendMapBounds(this.map, pathPoints);
        }
        if (!scope["static"] && angular.isDefined(scope.editable)) {
          scope.$watch('editable', function(newValue, oldValue) {
            if (newValue !== oldValue) {
              return polygon.setEditable(newValue);
            }
          });
        }
        if (angular.isDefined(scope.draggable)) {
          scope.$watch('draggable', function(newValue, oldValue) {
            if (newValue !== oldValue) {
              return polygon.setDraggable(newValue);
            }
          });
        }
        if (angular.isDefined(scope.visible)) {
          scope.$watch('visible', function(newValue, oldValue) {
            if (newValue !== oldValue) {
              return polygon.setVisible(newValue);
            }
          });
        }
        if (angular.isDefined(scope.geodesic)) {
          scope.$watch('geodesic', (function(_this) {
            return function(newValue, oldValue) {
              if (newValue !== oldValue) {
                return polygon.setOptions(_this.buildOpts(polygon.getPath()));
              }
            };
          })(this));
        }
        if (angular.isDefined(scope.stroke) && angular.isDefined(scope.stroke.opacity)) {
          scope.$watch('stroke.opacity', (function(_this) {
            return function(newValue, oldValue) {
              return polygon.setOptions(_this.buildOpts(polygon.getPath()));
            };
          })(this));
        }
        if (angular.isDefined(scope.stroke) && angular.isDefined(scope.stroke.weight)) {
          scope.$watch('stroke.weight', (function(_this) {
            return function(newValue, oldValue) {
              if (newValue !== oldValue) {
                return polygon.setOptions(_this.buildOpts(polygon.getPath()));
              }
            };
          })(this));
        }
        if (angular.isDefined(scope.stroke) && angular.isDefined(scope.stroke.color)) {
          scope.$watch('stroke.color', (function(_this) {
            return function(newValue, oldValue) {
              if (newValue !== oldValue) {
                return polygon.setOptions(_this.buildOpts(polygon.getPath()));
              }
            };
          })(this));
        }
        if (angular.isDefined(scope.fill) && angular.isDefined(scope.fill.color)) {
          scope.$watch('fill.color', (function(_this) {
            return function(newValue, oldValue) {
              if (newValue !== oldValue) {
                return polygon.setOptions(_this.buildOpts(polygon.getPath()));
              }
            };
          })(this));
        }
        if (angular.isDefined(scope.fill) && angular.isDefined(scope.fill.opacity)) {
          scope.$watch('fill.opacity', (function(_this) {
            return function(newValue, oldValue) {
              if (newValue !== oldValue) {
                return polygon.setOptions(_this.buildOpts(polygon.getPath()));
              }
            };
          })(this));
        }
        if (angular.isDefined(scope.zIndex)) {
          scope.$watch('zIndex', (function(_this) {
            return function(newValue, oldValue) {
              if (newValue !== oldValue) {
                return polygon.setOptions(_this.buildOpts(polygon.getPath()));
              }
            };
          })(this));
        }
        if (angular.isDefined(scope.events) && scope.events !== null && angular.isObject(scope.events)) {
          this.listeners = EventsHelper.setEvents(polygon, scope, scope);
        }
        arraySyncer = arraySync(polygon.getPath(), scope, 'path', (function(_this) {
          return function(pathPoints) {
            if (scope.fit) {
              return _this.extendMapBounds(_this.map, pathPoints);
            }
          };
        })(this));
        scope.$on('$destroy', (function(_this) {
          return function() {
            polygon.setMap(null);
            _this.removeEvents(_this.listeners);
            if (arraySyncer) {
              arraySyncer();
              return arraySyncer = null;
            }
          };
        })(this));
      }

      return PolygonChildModel;

    })(Builder);
  }
]);
