var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

angular.module("google-maps.mocks", []).factory("GoogleApiMock", function() {
  var GoogleApiMock, MockInfoWindow, getMarker;
  MockInfoWindow = (function() {
    function MockInfoWindow() {
      this.close = __bind(this.close, this);
      this.open = __bind(this.open, this);
      this._isOpen = false;
    }

    MockInfoWindow.prototype.open = function(map, anchor) {
      this._isOpen = true;
    };

    MockInfoWindow.prototype.close = function() {
      this._isOpen = false;
    };

    MockInfoWindow.prototype.isOpen = function(val) {
      if (val == null) {
        val = void 0;
      }
      if (val == null) {
        return this._isOpen;
      } else {
        return this._isOpen = val;
      }
    };

    return MockInfoWindow;

  })();
  getMarker = function() {
    var Marker, map;
    map = void 0;
    Marker = function(opts) {};
    Marker.prototype.setMap = function(_map) {
      return map = _map;
    };
    Marker.prototype.getMap = function() {
      return map;
    };
    Marker.prototype.setPosition = function(position) {};
    Marker.prototype.setIcon = function(icon) {};
    Marker.prototype.setVisible = function(isVisible) {};
    Marker.prototype.setOptions = function(options) {};
    return Marker;
  };
  GoogleApiMock = (function() {
    function GoogleApiMock() {
      this.mockMap = __bind(this.mockMap, this);
      this.mocks = [this.mockAPI, this.mockLatLng, this.mockLatLngBounds, this.mockControlPosition, this.mockAnimation, this.mockMapTypeId, this.mockOverlayView, this.mockOverlayView, this.mockEvent, this.mockInfoWindow, this.mockMarker, this.mockMVCArray, this.mockPoint, this.mockPolygon, this.mockMap, this.mockPlaces, this.mockSearchBox];
      this.initAll = function() {
        return this.mocks.forEach(function(fn) {
          return typeof fn === "function" ? fn() : void 0;
        });
      };
    }

    GoogleApiMock.prototype.mockAPI = function() {
      var unmocked;
      window.google = {};
      window.google.maps = {};
      unmocked = (function(_this) {
        return function(api) {
          return function() {
            throw new String("Unmocked API " + api);
          };
        };
      })(this);
      window.google.maps.Marker = unmocked("Marker");
      window.google.maps.event = {
        clearListeners: unmocked("event.clearListeners"),
        addListener: unmocked("event.addListener"),
        removeListener: unmocked("event.removeListener")
      };
      window.google.maps.OverlayView = unmocked("OverlayView");
      window.google.maps.InfoWindow = unmocked("InfoWindow");
      window.google.maps.LatLng = unmocked("LatLng");
      window.google.maps.MVCArray = unmocked("MVCArray");
      window.google.maps.Point = unmocked("Point");
      return window.google.maps.LatLngBounds = unmocked("LatLngBounds");
    };

    GoogleApiMock.prototype.mockPlaces = function() {
      return window.google.maps.places = {};
    };

    GoogleApiMock.prototype.mockSearchBox = function(SearchBox) {
      if (SearchBox == null) {
        SearchBox = function() {};
      }
      return window.google.maps.places.SearchBox = SearchBox;
    };

    GoogleApiMock.prototype.mockLatLng = function(LatLng) {
      if (LatLng == null) {
        LatLng = function(y, x) {
          return {
            lat: function() {
              return y;
            },
            lng: function() {
              return x;
            }
          };
        };
      }
      return window.google.maps.LatLng = LatLng;
    };

    GoogleApiMock.prototype.mockLatLngBounds = function(LatLngBounds) {
      if (LatLngBounds == null) {
        LatLngBounds = function() {};
      }
      if (!(LatLngBounds.extend != null)) {
        LatLngBounds.prototype.extend = function() {};
      }
      return window.google.maps.LatLngBounds = LatLngBounds;
    };

    GoogleApiMock.prototype.mockMap = function() {
      var Map;
      Map = function() {
        this.center = {
          lat: function() {
            return 0;
          },
          lng: function() {
            return 0;
          }
        };
        this.controls = {
          TOP_CENTER: [],
          TOP_LEFT: [],
          TOP_RIGHT: [],
          LEFT_TOP: [],
          RIGHT_TOP: [],
          LEFT_CENTER: [],
          RIGHT_CENTER: [],
          LEFT_BOTTOM: [],
          RIGHT_BOTTOM: [],
          BOTTOM_CENTER: [],
          BOTTOM_LEFT: [],
          BOTTOM_RIGHT: []
        };
        this.overlayMapTypes = new window.google.maps.MVCArray();
        this.getControls = function() {
          return this.controls;
        };
        this.setZoom = function() {};
        this.setCenter = function() {};
        this.getCoords = function() {
          if (Map.getCoords == null) {
            return {
              latitude: 47,
              longitude: -27
            };
          }
        };
        return this;
      };
      this.mockMapTypeId();
      this.mockLatLng();
      this.mockOverlayView();
      this.mockEvent();
      this.mockMVCArray();
      return window.google.maps.Map = Map;
    };

    GoogleApiMock.prototype.mockControlPosition = function() {
      var ControlPosition;
      ControlPosition = {
        TOP_CENTER: 'TOP_CENTER',
        TOP_LEFT: 'TOP_LEFT',
        TOP_RIGHT: 'TOP_RIGHT',
        LEFT_TOP: 'LEFT_TOP',
        RIGHT_TOP: 'RIGHT_TOP',
        LEFT_CENTER: 'LEFT_CENTER',
        RIGHT_CENTER: 'RIGHT_CENTER',
        LEFT_BOTTOM: 'LEFT_BOTTOM',
        RIGHT_BOTTOM: 'RIGHT_BOTTOM',
        BOTTOM_CENTER: 'BOTTOM_CENTER',
        BOTTOM_LEFT: 'BOTTOM_LEFT',
        BOTTOM_RIGHT: 'BOTTOM_RIGHT'
      };
      return window.google.maps.ControlPosition = ControlPosition;
    };

    GoogleApiMock.prototype.mockAnimation = function(Animation) {
      if (Animation == null) {
        Animation = {
          BOUNCE: "bounce"
        };
      }
      return window.google.maps.Animation = Animation;
    };

    GoogleApiMock.prototype.mockMapTypeId = function(MapTypeId) {
      if (MapTypeId == null) {
        MapTypeId = {
          ROADMAP: "roadmap"
        };
      }
      return window.google.maps.MapTypeId = MapTypeId;
    };

    GoogleApiMock.prototype.mockOverlayView = function(OverlayView) {
      if (OverlayView == null) {
        OverlayView = OverlayView = (function() {
          function OverlayView() {}

          OverlayView.prototype.setMap = function() {};

          return OverlayView;

        })();
      }
      return window.google.maps.OverlayView = OverlayView;
    };

    GoogleApiMock.prototype.mockEvent = function(event) {
      var listeners;
      if (event == null) {
        event = {};
      }
      listeners = [];
      if (!event.addListener) {
        event.addListener = function(thing, eventName, callBack) {
          var found, toPush;
          found = _.find(listeners, function(obj) {
            return obj.obj === thing;
          });
          if (found == null) {
            toPush = {};
            toPush.obj = thing;
            toPush.events = {};
            toPush.events[eventName] = callBack;
            return listeners.push(toPush);
          } else {
            return found.events[eventName] = callBack;
          }
        };
        event.addListenerOnce = function(thing, eventName, callBack) {
          callBack();
          return event.addListener(thing, eventName, callBack);
        };
      }
      if (!event.clearListeners) {
        event.clearListeners = function() {
          return listeners.length = 0;
        };
      }
      if (!event.removeListener) {
        event.removeListener = function(item) {
          var index;
          index = listeners.indexOf(item);
          if (index !== -1) {
            return listeners.splice(index);
          }
        };
      }
      if (!event.fireListener) {
        event.fireListener = (function(_this) {
          return function(thing, eventName) {
            var found;
            found = _.find(listeners, function(obj) {
              return obj.obj === thing;
            });
            if (found != null) {
              return found.events[eventName](found.obj);
            }
          };
        })(this);
      }
      window.google.maps.event = event;
      return listeners;
    };

    GoogleApiMock.prototype.mockInfoWindow = function(InfoWindow) {
      if (InfoWindow == null) {
        InfoWindow = MockInfoWindow;
      }
      return window.google.maps.InfoWindow = InfoWindow;
    };

    GoogleApiMock.prototype.mockMarker = function(Marker) {
      if (Marker == null) {
        Marker = getMarker();
      }
      return window.google.maps.Marker = Marker;
    };

    GoogleApiMock.prototype.mockMVCArray = function() {
      var MVCArray;
      MVCArray = function() {
        this.values = [];
      };
      if (!(MVCArray.getLength != null)) {
        MVCArray.prototype.getLength = function() {
          return this.values.length;
        };
      }
      if (!(MVCArray.push != null)) {
        MVCArray.prototype.push = function(value) {
          return this.values.push(value);
        };
      }
      return window.google.maps.MVCArray = MVCArray;
    };

    GoogleApiMock.prototype.mockPoint = function(Point) {
      if (Point == null) {
        Point = function(x, y) {
          return {
            x: x,
            y: y
          };
        };
      }
      return window.google.maps.Point = Point;
    };

    GoogleApiMock.prototype.mockPolygon = function(polygon) {
      if (polygon != null) {
        return window.google.maps.Polygon = polygon;
      }
      return window.google.maps.Polygon = function(options) {
        this.getDraggable = function() {
          return options.draggable;
        };
        this.getEditable = function() {
          return options.editable;
        };
        this.getMap = function() {
          return options.map;
        };
        this.getPath = function() {
          return _.first(options.paths);
        };
        this.getPaths = function() {
          return options.paths;
        };
        this.getVisible = function() {
          return options.visible;
        };
        this.setOptions = function(opts) {
          return options = opts;
        };
        this.setDraggable = function(boolean) {
          return options.draggable = boolean;
        };
        this.setEditable = function(boolean) {
          return options.editable = boolean;
        };
        this.setMap = function(map) {
          return options.map = map;
        };
        this.setPath = function(path) {
          if ((options.paths != null) && options.paths.length > 0) {
            return options.paths[0] = path;
          } else {
            options.paths = [];
            return options.paths.push(path);
          }
        };
        this.setPaths = function(paths) {
          return options.paths = paths;
        };
        this.setVisible = function(boolean) {
          return options.visible = boolean;
        };
        return this;
      };
    };

    GoogleApiMock.prototype.getMarker = getMarker;

    return GoogleApiMock;

  })();
  return GoogleApiMock;
});

angular.module("google-maps.mocks".ns(), ["google-maps".ns(), "google-maps.mocks"]);
