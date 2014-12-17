var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

angular.module('uiGmapgoogle-maps.directives.api').factory('uiGmapPolylineChildModel', [
  'uiGmapPolylineOptionsBuilder', 'uiGmapLogger', '$timeout', 'uiGmaparray-sync', 'uiGmapGmapUtil', 'uiGmapEventsHelper', function(Builder, $log, $timeout, arraySync, GmapUtil, EventsHelper) {
    var PolylineChildModel;
    return PolylineChildModel = (function(_super) {
      __extends(PolylineChildModel, _super);

      PolylineChildModel.include(GmapUtil);

      PolylineChildModel.include(EventsHelper);

      function PolylineChildModel(scope, attrs, map, defaults, model) {
        var createPolyline;
        this.scope = scope;
        this.attrs = attrs;
        this.map = map;
        this.defaults = defaults;
        this.model = model;
        this.clean = __bind(this.clean, this);
        createPolyline = (function(_this) {
          return function() {
            var pathPoints;
            pathPoints = _this.convertPathPoints(_this.scope.path);
            if (_this.polyline != null) {
              _this.clean();
            }
            if (pathPoints.length > 0) {
              _this.polyline = new google.maps.Polyline(_this.buildOpts(pathPoints));
            }
            if (_this.polyline) {
              if (_this.scope.fit) {
                _this.extendMapBounds(map, pathPoints);
              }
              arraySync(_this.polyline.getPath(), _this.scope, 'path', function(pathPoints) {
                if (_this.scope.fit) {
                  return _this.extendMapBounds(map, pathPoints);
                }
              });
              return _this.listeners = _this.model ? _this.setEvents(_this.polyline, _this.scope, _this.model) : _this.setEvents(_this.polyline, _this.scope, _this.scope);
            }
          };
        })(this);
        createPolyline();
        scope.$watch('path', (function(_this) {
          return function(newValue, oldValue) {
            if (!_.isEqual(newValue, oldValue) || !_this.polyline) {
              return createPolyline();
            }
          };
        })(this));
        if (!scope["static"] && angular.isDefined(scope.editable)) {
          scope.$watch('editable', (function(_this) {
            return function(newValue, oldValue) {
              var _ref;
              if (newValue !== oldValue) {
                return (_ref = _this.polyline) != null ? _ref.setEditable(newValue) : void 0;
              }
            };
          })(this));
        }
        if (angular.isDefined(scope.draggable)) {
          scope.$watch('draggable', (function(_this) {
            return function(newValue, oldValue) {
              var _ref;
              if (newValue !== oldValue) {
                return (_ref = _this.polyline) != null ? _ref.setDraggable(newValue) : void 0;
              }
            };
          })(this));
        }
        if (angular.isDefined(scope.visible)) {
          scope.$watch('visible', (function(_this) {
            return function(newValue, oldValue) {
              var _ref;
              if (newValue !== oldValue) {
                return (_ref = _this.polyline) != null ? _ref.setVisible(newValue) : void 0;
              }
            };
          })(this));
        }
        if (angular.isDefined(scope.geodesic)) {
          scope.$watch('geodesic', (function(_this) {
            return function(newValue, oldValue) {
              var _ref;
              if (newValue !== oldValue) {
                return (_ref = _this.polyline) != null ? _ref.setOptions(_this.buildOpts(_this.polyline.getPath())) : void 0;
              }
            };
          })(this));
        }
        if (angular.isDefined(scope.stroke) && angular.isDefined(scope.stroke.weight)) {
          scope.$watch('stroke.weight', (function(_this) {
            return function(newValue, oldValue) {
              var _ref;
              if (newValue !== oldValue) {
                return (_ref = _this.polyline) != null ? _ref.setOptions(_this.buildOpts(_this.polyline.getPath())) : void 0;
              }
            };
          })(this));
        }
        if (angular.isDefined(scope.stroke) && angular.isDefined(scope.stroke.color)) {
          scope.$watch('stroke.color', (function(_this) {
            return function(newValue, oldValue) {
              var _ref;
              if (newValue !== oldValue) {
                return (_ref = _this.polyline) != null ? _ref.setOptions(_this.buildOpts(_this.polyline.getPath())) : void 0;
              }
            };
          })(this));
        }
        if (angular.isDefined(scope.stroke) && angular.isDefined(scope.stroke.opacity)) {
          scope.$watch('stroke.opacity', (function(_this) {
            return function(newValue, oldValue) {
              var _ref;
              if (newValue !== oldValue) {
                return (_ref = _this.polyline) != null ? _ref.setOptions(_this.buildOpts(_this.polyline.getPath())) : void 0;
              }
            };
          })(this));
        }
        if (angular.isDefined(scope.icons)) {
          scope.$watch('icons', (function(_this) {
            return function(newValue, oldValue) {
              var _ref;
              if (newValue !== oldValue) {
                return (_ref = _this.polyline) != null ? _ref.setOptions(_this.buildOpts(_this.polyline.getPath())) : void 0;
              }
            };
          })(this));
        }
        scope.$on('$destroy', (function(_this) {
          return function() {
            _this.clean();
            return _this.scope = null;
          };
        })(this));
        $log.info(this);
      }

      PolylineChildModel.prototype.clean = function() {
        var arraySyncer, _ref;
        this.removeEvents(this.listeners);
        if ((_ref = this.polyline) != null) {
          _ref.setMap(null);
        }
        this.polyline = null;
        if (arraySyncer) {
          arraySyncer();
          return arraySyncer = null;
        }
      };

      PolylineChildModel.prototype.destroy = function() {
        return this.scope.$destroy();
      };

      return PolylineChildModel;

    })(Builder);
  }
]);
