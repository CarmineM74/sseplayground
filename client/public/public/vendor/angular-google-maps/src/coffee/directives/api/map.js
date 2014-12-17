var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

angular.module("uiGmapgoogle-maps.directives.api").factory("uiGmapMap", [
  "$timeout", '$q', "uiGmapLogger", "uiGmapGmapUtil", "uiGmapBaseObject", "uiGmapCtrlHandle", 'uiGmapIsReady', "uiGmapuuid", "uiGmapExtendGWin", "uiGmapExtendMarkerClusterer", "uiGmapGoogleMapsUtilV3", 'uiGmapGoogleMapApi', function($timeout, $q, $log, GmapUtil, BaseObject, CtrlHandle, IsReady, uuid, ExtendGWin, ExtendMarkerClusterer, GoogleMapsUtilV3, GoogleMapApi) {
    "use strict";
    var DEFAULTS, Map, initializeItems;
    DEFAULTS = void 0;
    initializeItems = [GoogleMapsUtilV3, ExtendGWin, ExtendMarkerClusterer];
    return Map = (function(_super) {
      __extends(Map, _super);

      Map.include(GmapUtil);

      function Map() {
        this.link = __bind(this.link, this);
        var ctrlFn, self;
        ctrlFn = function($scope) {
          var ctrlObj, retCtrl;
          retCtrl = void 0;
          $scope.$on('$destroy', function() {
            return IsReady.reset();
          });
          ctrlObj = CtrlHandle.handle($scope);
          $scope.ctrlType = 'Map';
          $scope.deferred.promise.then(function() {
            return initializeItems.forEach(function(i) {
              return i.init();
            });
          });
          ctrlObj.getMap = function() {
            return $scope.map;
          };
          retCtrl = _.extend(this, ctrlObj);
          return retCtrl;
        };
        this.controller = ["$scope", ctrlFn];
        self = this;
      }

      Map.prototype.restrict = "EMA";

      Map.prototype.transclude = true;

      Map.prototype.replace = false;

      Map.prototype.template = '<div class="angular-google-map"><div class="angular-google-map-container"></div><div ng-transclude style="display: none"></div></div>';

      Map.prototype.scope = {
        center: "=",
        zoom: "=",
        dragging: "=",
        control: "=",
        options: "=",
        events: "=",
        eventOpts: "=",
        styles: "=",
        bounds: "=",
        update: '='
      };

      Map.prototype.link = function(scope, element, attrs) {
        var unbindCenterWatch;
        scope.idleAndZoomChanged = false;
        if (scope.center == null) {
          unbindCenterWatch = scope.$watch('center', (function(_this) {
            return function() {
              if (!scope.center) {
                return;
              }
              unbindCenterWatch();
              return _this.link(scope, element, attrs);
            };
          })(this));
          return;
        }
        return GoogleMapApi.then((function(_this) {
          return function(maps) {
            var dragging, el, eventName, getEventHandler, mapOptions, opts, resolveSpawned, settingCenterFromScope, spawned, type, _m;
            DEFAULTS = {
              mapTypeId: maps.MapTypeId.ROADMAP
            };
            spawned = IsReady.spawn();
            resolveSpawned = function() {
              return spawned.deferred.resolve({
                instance: spawned.instance,
                map: _m
              });
            };
            if (!_this.validateCoords(scope.center)) {
              $log.error("angular-google-maps: could not find a valid center property");
              return;
            }
            if (!angular.isDefined(scope.zoom)) {
              $log.error("angular-google-maps: map zoom property not set");
              return;
            }
            el = angular.element(element);
            el.addClass("angular-google-map");
            opts = {
              options: {}
            };
            if (attrs.options) {
              opts.options = scope.options;
            }
            if (attrs.styles) {
              opts.styles = scope.styles;
            }
            if (attrs.type) {
              type = attrs.type.toUpperCase();
              if (google.maps.MapTypeId.hasOwnProperty(type)) {
                opts.mapTypeId = google.maps.MapTypeId[attrs.type.toUpperCase()];
              } else {
                $log.error("angular-google-maps: invalid map type '" + attrs.type + "'");
              }
            }
            mapOptions = angular.extend({}, DEFAULTS, opts, {
              center: _this.getCoords(scope.center),
              zoom: scope.zoom,
              bounds: scope.bounds
            });
            _m = new google.maps.Map(el.find("div")[1], mapOptions);
            _m['uiGmap_id'] = uuid.generate();
            dragging = false;
            google.maps.event.addListenerOnce(_m, 'idle', function() {
              scope.deferred.resolve(_m);
              return resolveSpawned();
            });
            google.maps.event.addListener(_m, "dragstart", function() {
              var _ref;
              if (!((_ref = scope.update) != null ? _ref.lazy : void 0)) {
                dragging = true;
                return scope.$evalAsync(function(s) {
                  if (s.dragging != null) {
                    return s.dragging = dragging;
                  }
                });
              }
            });
            google.maps.event.addListener(_m, "dragend", function() {
              var _ref;
              if (!((_ref = scope.update) != null ? _ref.lazy : void 0)) {
                dragging = false;
                return scope.$evalAsync(function(s) {
                  if (s.dragging != null) {
                    return s.dragging = dragging;
                  }
                });
              }
            });
            google.maps.event.addListener(_m, "drag", function() {
              var c, _ref, _ref1, _ref2, _ref3;
              if (!((_ref = scope.update) != null ? _ref.lazy : void 0)) {
                c = _m.center;
                return $timeout(function() {
                  var s;
                  s = scope;
                  if (angular.isDefined(s.center.type)) {
                    s.center.coordinates[1] = c.lat();
                    return s.center.coordinates[0] = c.lng();
                  } else {
                    s.center.latitude = c.lat();
                    return s.center.longitude = c.lng();
                  }
                }, (_ref1 = scope.eventOpts) != null ? (_ref2 = _ref1.debounce) != null ? (_ref3 = _ref2.debounce) != null ? _ref3.dragMs : void 0 : void 0 : void 0);
              }
            });
            google.maps.event.addListener(_m, "zoom_changed", function() {
              var _ref, _ref1, _ref2;
              if (!((_ref = scope.update) != null ? _ref.lazy : void 0)) {
                if (scope.zoom !== _m.zoom) {
                  return $timeout(function() {
                    return scope.zoom = _m.zoom;
                  }, (_ref1 = scope.eventOpts) != null ? (_ref2 = _ref1.debounce) != null ? _ref2.zoomMs : void 0 : void 0);
                }
              }
            });
            settingCenterFromScope = false;
            google.maps.event.addListener(_m, "center_changed", function() {
              var c, _ref, _ref1, _ref2;
              if (!((_ref = scope.update) != null ? _ref.lazy : void 0)) {
                c = _m.center;
                if (settingCenterFromScope) {
                  return;
                }
                return $timeout(function() {
                  var s;
                  s = scope;
                  if (!_m.dragging) {
                    if (angular.isDefined(s.center.type)) {
                      if (s.center.coordinates[1] !== c.lat()) {
                        s.center.coordinates[1] = c.lat();
                      }
                      if (s.center.coordinates[0] !== c.lng()) {
                        return s.center.coordinates[0] = c.lng();
                      }
                    } else {
                      if (s.center.latitude !== c.lat()) {
                        s.center.latitude = c.lat();
                      }
                      if (s.center.longitude !== c.lng()) {
                        return s.center.longitude = c.lng();
                      }
                    }
                  }
                }, (_ref1 = scope.eventOpts) != null ? (_ref2 = _ref1.debounce) != null ? _ref2.centerMs : void 0 : void 0);
              }
            });
            google.maps.event.addListener(_m, "idle", function() {
              var b, ne, sw;
              b = _m.getBounds();
              ne = b.getNorthEast();
              sw = b.getSouthWest();
              return scope.$evalAsync(function(s) {
                var c, _ref;
                if ((_ref = s.update) != null ? _ref.lazy : void 0) {
                  c = _m.center;
                  if (angular.isDefined(s.center.type)) {
                    if (s.center.coordinates[1] !== c.lat()) {
                      s.center.coordinates[1] = c.lat();
                    }
                    if (s.center.coordinates[0] !== c.lng()) {
                      s.center.coordinates[0] = c.lng();
                    }
                  } else {
                    if (s.center.latitude !== c.lat()) {
                      s.center.latitude = c.lat();
                    }
                    if (s.center.longitude !== c.lng()) {
                      s.center.longitude = c.lng();
                    }
                  }
                }
                if (s.bounds !== null && s.bounds !== undefined && s.bounds !== void 0) {
                  s.bounds.northeast = {
                    latitude: ne.lat(),
                    longitude: ne.lng()
                  };
                  s.bounds.southwest = {
                    latitude: sw.lat(),
                    longitude: sw.lng()
                  };
                }
                s.zoom = _m.zoom;
                return scope.idleAndZoomChanged = !scope.idleAndZoomChanged;
              });
            });
            if (angular.isDefined(scope.events) && scope.events !== null && angular.isObject(scope.events)) {
              getEventHandler = function(eventName) {
                return function() {
                  return scope.events[eventName].apply(scope, [_m, eventName, arguments]);
                };
              };
              for (eventName in scope.events) {
                if (scope.events.hasOwnProperty(eventName) && angular.isFunction(scope.events[eventName])) {
                  google.maps.event.addListener(_m, eventName, getEventHandler(eventName));
                }
              }
            }
            _m.getOptions = function() {
              return mapOptions;
            };
            scope.map = _m;
            if ((attrs.control != null) && (scope.control != null)) {
              scope.control.refresh = function(maybeCoords) {
                var coords;
                if (_m == null) {
                  return;
                }
                google.maps.event.trigger(_m, "resize");
                if (((maybeCoords != null ? maybeCoords.latitude : void 0) != null) && ((maybeCoords != null ? maybeCoords.latitude : void 0) != null)) {
                  coords = _this.getCoords(maybeCoords);
                  if (_this.isTrue(attrs.pan)) {
                    return _m.panTo(coords);
                  } else {
                    return _m.setCenter(coords);
                  }
                }
              };
              scope.control.getGMap = function() {
                return _m;
              };
              scope.control.getMapOptions = function() {
                return mapOptions;
              };
            }
            scope.$watch("center", (function(newValue, oldValue) {
              var coords;
              coords = _this.getCoords(newValue);
              if (coords.lat() === _m.center.lat() && coords.lng() === _m.center.lng()) {
                return;
              }
              settingCenterFromScope = true;
              if (!dragging) {
                if (!_this.validateCoords(newValue)) {
                  $log.error("Invalid center for newValue: " + (JSON.stringify(newValue)));
                }
                if (_this.isTrue(attrs.pan) && scope.zoom === _m.zoom) {
                  _m.panTo(coords);
                } else {
                  _m.setCenter(coords);
                }
              }
              return settingCenterFromScope = false;
            }), true);
            scope.$watch("zoom", function(newValue, oldValue) {
              if (_.isEqual(newValue, oldValue)) {
                return;
              }
              return $timeout(function() {
                return _m.setZoom(newValue);
              }, 0, false);
            });
            scope.$watch("bounds", function(newValue, oldValue) {
              var bounds, ne, sw;
              if (newValue === oldValue) {
                return;
              }
              if ((newValue.northeast.latitude == null) || (newValue.northeast.longitude == null) || (newValue.southwest.latitude == null) || (newValue.southwest.longitude == null)) {
                $log.error("Invalid map bounds for new value: " + (JSON.stringify(newValue)));
                return;
              }
              ne = new google.maps.LatLng(newValue.northeast.latitude, newValue.northeast.longitude);
              sw = new google.maps.LatLng(newValue.southwest.latitude, newValue.southwest.longitude);
              bounds = new google.maps.LatLngBounds(sw, ne);
              return _m.fitBounds(bounds);
            });
            return ['options', 'styles'].forEach(function(toWatch) {
              return scope.$watch(toWatch, function(newValue, oldValue) {
                var watchItem;
                watchItem = this.exp;
                if (_.isEqual(newValue, oldValue)) {
                  return;
                }
                opts.options = newValue;
                if (_m != null) {
                  return _m.setOptions(opts);
                }
              });
            }, true);
          };
        })(this));
      };

      return Map;

    })(BaseObject);
  }
]);
