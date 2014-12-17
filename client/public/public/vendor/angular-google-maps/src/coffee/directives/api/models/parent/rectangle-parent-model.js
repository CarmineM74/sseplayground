var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

angular.module("google-maps.directives.api.models.parent".ns()).factory("RectangleParentModel".ns(), [
  "Logger".ns(), "GmapUtil".ns(), "EventsHelper".ns(), "RectangleOptionsBuilder".ns(), function($log, GmapUtil, EventsHelper, Builder) {
    var RectangleParentModel;
    return RectangleParentModel = (function(_super) {
      __extends(RectangleParentModel, _super);

      RectangleParentModel.include(GmapUtil);

      RectangleParentModel.include(EventsHelper);

      function RectangleParentModel(scope, element, attrs, map, DEFAULTS) {
        var bounds, clear, createBounds, dragging, fit, init, listeners, myListeners, rectangle, settingBoundsFromScope, updateBounds;
        this.scope = scope;
        this.attrs = attrs;
        this.map = map;
        this.DEFAULTS = DEFAULTS;
        bounds = void 0;
        dragging = false;
        myListeners = [];
        listeners = void 0;
        fit = (function(_this) {
          return function() {
            if (_this.isTrue(attrs.fit)) {
              return _this.fitMapBounds(_this.map, bounds);
            }
          };
        })(this);
        createBounds = (function(_this) {
          return function() {
            var _ref, _ref1;
            if ((scope.bounds != null) && (((_ref = scope.bounds) != null ? _ref.sw : void 0) != null) && (((_ref1 = scope.bounds) != null ? _ref1.ne : void 0) != null) && _this.validateBoundPoints(scope.bounds)) {
              bounds = _this.convertBoundPoints(scope.bounds);
              return $log.info("new new bounds created: " + rectangle);
            } else if ((scope.bounds.getNorthEast != null) && (scope.bounds.getSouthWest != null)) {
              return bounds = scope.bounds;
            } else {
              if (typeof bound !== "undefined" && bound !== null) {
                return $log.error("Invalid bounds for newValue: " + (JSON.stringify(scope.bounds)));
              }
            }
          };
        })(this);
        createBounds();
        rectangle = new google.maps.Rectangle(this.buildOpts(bounds));
        $log.info("rectangle created: " + rectangle);
        settingBoundsFromScope = false;
        updateBounds = (function(_this) {
          return function() {
            var b, ne, sw;
            b = rectangle.getBounds();
            ne = b.getNorthEast();
            sw = b.getSouthWest();
            if (settingBoundsFromScope) {
              return;
            }
            return scope.$evalAsync(function(s) {
              if ((s.bounds != null) && (s.bounds.sw != null) && (s.bounds.ne != null)) {
                s.bounds.ne = {
                  latitude: ne.lat(),
                  longitude: ne.lng()
                };
                s.bounds.sw = {
                  latitude: sw.lat(),
                  longitude: sw.lng()
                };
              }
              if ((s.bounds.getNorthEast != null) && (s.bounds.getSouthWest != null)) {
                return s.bounds = b;
              }
            });
          };
        })(this);
        init = (function(_this) {
          return function() {
            fit();
            _this.removeEvents(myListeners);
            myListeners.push(google.maps.event.addListener(rectangle, "dragstart", function() {
              return dragging = true;
            }));
            myListeners.push(google.maps.event.addListener(rectangle, "dragend", function() {
              dragging = false;
              return updateBounds();
            }));
            return myListeners.push(google.maps.event.addListener(rectangle, "bounds_changed", function() {
              if (dragging) {
                return;
              }
              return updateBounds();
            }));
          };
        })(this);
        clear = (function(_this) {
          return function() {
            _this.removeEvents(myListeners);
            if (listeners != null) {
              _this.removeEvents(listeners);
            }
            return rectangle.setMap(null);
          };
        })(this);
        if (bounds != null) {
          init();
        }
        scope.$watch("bounds", (function(newValue, oldValue) {
          var isNew;
          if (_.isEqual(newValue, oldValue) && (bounds != null) || dragging) {
            return;
          }
          settingBoundsFromScope = true;
          if (newValue == null) {
            clear();
            return;
          }
          if (bounds == null) {
            isNew = true;
          } else {
            fit();
          }
          createBounds();
          rectangle.setBounds(bounds);
          settingBoundsFromScope = false;
          if (isNew && (bounds != null)) {
            return init();
          }
        }), true);
        this.setMyOptions = (function(_this) {
          return function(newVals, oldVals) {
            if (!_.isEqual(newVals, oldVals)) {
              if ((bounds != null) && (newVals != null)) {
                return rectangle.setOptions(_this.buildOpts(bounds));
              }
            }
          };
        })(this);
        this.props.push('bounds');
        this.watchProps(this.props);
        if (attrs.events != null) {
          listeners = this.setEvents(rectangle, scope, scope);
          scope.$watch("events", (function(_this) {
            return function(newValue, oldValue) {
              if (!_.isEqual(newValue, oldValue)) {
                if (listeners != null) {
                  _this.removeEvents(listeners);
                }
                return listeners = _this.setEvents(rectangle, scope, scope);
              }
            };
          })(this));
        }
        scope.$on("$destroy", (function(_this) {
          return function() {
            return clear();
          };
        })(this));
        $log.info(this);
      }

      return RectangleParentModel;

    })(Builder);
  }
]);
