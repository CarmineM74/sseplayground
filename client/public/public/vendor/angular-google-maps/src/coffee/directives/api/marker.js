var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

angular.module("uiGmapgoogle-maps.directives.api").factory("uiGmapMarker", [
  "uiGmapIMarker", "uiGmapMarkerChildModel", "uiGmapMarkerManager", function(IMarker, MarkerChildModel, MarkerManager) {
    var Marker;
    return Marker = (function(_super) {
      __extends(Marker, _super);

      function Marker() {
        this.link = __bind(this.link, this);
        Marker.__super__.constructor.call(this);
        this.template = '<span class="angular-google-map-marker" ng-transclude></span>';
        this.$log.info(this);
      }

      Marker.prototype.controller = [
        '$scope', '$element', function($scope, $element) {
          $scope.ctrlType = 'Marker';
          return _.extend(this, IMarker.handle($scope, $element));
        }
      ];

      Marker.prototype.link = function(scope, element, attrs, ctrl) {
        this.mapPromise = IMarker.mapPromise(scope, ctrl);
        this.mapPromise.then((function(_this) {
          return function(map) {
            var doClick, doDrawSelf, keys, m, trackModel;
            if (!_this.gMarkerManager) {
              _this.gMarkerManager = new MarkerManager(map);
            }
            keys = _.object(IMarker.keys, IMarker.keys);
            m = new MarkerChildModel(scope, scope, keys, map, {}, doClick = true, _this.gMarkerManager, doDrawSelf = false, trackModel = false);
            m.deferred.promise.then(function(gMarker) {
              return scope.deferred.resolve(gMarker);
            });
            if (scope.control != null) {
              return scope.control.getGMarkers = _this.gMarkerManager.getGMarkers;
            }
          };
        })(this));
        return scope.$on('$destroy', (function(_this) {
          return function() {
            var _ref;
            if ((_ref = _this.gMarkerManager) != null) {
              _ref.clear();
            }
            return _this.gMarkerManager = null;
          };
        })(this));
      };

      return Marker;

    })(IMarker);
  }
]);
