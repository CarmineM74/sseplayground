var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

angular.module("uiGmapgoogle-maps.directives.api").factory("uiGmapMarkers", [
  "uiGmapIMarker", "uiGmapMarkersParentModel", "uiGmap_sync", function(IMarker, MarkersParentModel, _sync) {
    var Markers;
    return Markers = (function(_super) {
      __extends(Markers, _super);

      function Markers($timeout) {
        this.link = __bind(this.link, this);
        Markers.__super__.constructor.call(this, $timeout);
        this.template = '<span class="angular-google-map-markers" ng-transclude></span>';
        this.scope = _.extend(this.scope || {}, {
          idKey: '=idkey',
          doRebuildAll: '=dorebuildall',
          models: '=models',
          doCluster: '=docluster',
          clusterOptions: '=clusteroptions',
          clusterEvents: '=clusterevents',
          modelsByRef: '=modelsbyref'
        });
        this.$log.info(this);
      }

      Markers.prototype.controller = [
        '$scope', '$element', function($scope, $element) {
          $scope.ctrlType = 'Markers';
          return _.extend(this, IMarker.handle($scope, $element));
        }
      ];

      Markers.prototype.link = function(scope, element, attrs, ctrl) {
        var parentModel, ready;
        parentModel = void 0;
        ready = (function(_this) {
          return function() {
            if (scope.control != null) {
              scope.control.getGMarkers = function() {
                var _ref;
                return (_ref = parentModel.gMarkerManager) != null ? _ref.getGMarkers() : void 0;
              };
              scope.control.getChildMarkers = function() {
                return parentModel.markerModels;
              };
            }
            return scope.deferred.resolve();
          };
        })(this);
        return IMarker.mapPromise(scope, ctrl).then((function(_this) {
          return function(map) {
            var mapScope;
            mapScope = ctrl.getScope();
            mapScope.$watch('idleAndZoomChanged', function() {
              return _.defer(parentModel.gMarkerManager.draw);
            });
            parentModel = new MarkersParentModel(scope, element, attrs, map);
            return parentModel.existingPieces.then(function() {
              return ready();
            });
          };
        })(this));
      };

      return Markers;

    })(IMarker);
  }
]);
