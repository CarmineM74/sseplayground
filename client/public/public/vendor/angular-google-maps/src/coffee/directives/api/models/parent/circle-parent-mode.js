var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

angular.module('uiGmapgoogle-maps.directives.api.models.parent').factory('uiGmapCircleParentModel', [
  'uiGmapLogger', '$timeout', 'uiGmapGmapUtil', 'uiGmapEventsHelper', 'uiGmapCircleOptionsBuilder', function($log, $timeout, GmapUtil, EventsHelper, Builder) {
    var CircleParentModel;
    return CircleParentModel = (function(_super) {
      __extends(CircleParentModel, _super);

      CircleParentModel.include(GmapUtil);

      CircleParentModel.include(EventsHelper);

      function CircleParentModel(scope, element, attrs, map, DEFAULTS) {
        var circle, listeners;
        this.scope = scope;
        this.attrs = attrs;
        this.map = map;
        this.DEFAULTS = DEFAULTS;
        circle = new google.maps.Circle(this.buildOpts(GmapUtil.getCoords(scope.center), scope.radius));
        this.setMyOptions = (function(_this) {
          return function(newVals, oldVals) {
            if (!_.isEqual(newVals, oldVals)) {
              return circle.setOptions(_this.buildOpts(GmapUtil.getCoords(scope.center), scope.radius));
            }
          };
        })(this);
        this.props = this.props.concat([
          {
            prop: 'center',
            isColl: true
          }, {
            prop: 'fill',
            isColl: true
          }, 'radius'
        ]);
        this.watchProps();
        listeners = this.setEvents(circle, scope, scope);
        google.maps.event.addListener(circle, 'radius_changed', function() {
          return scope.$evalAsync(function() {
            return scope.radius = circle.getRadius();
          });
        });
        google.maps.event.addListener(circle, 'center_changed', function() {
          return scope.$evalAsync(function() {
            if (angular.isDefined(scope.center.type)) {
              scope.center.coordinates[1] = circle.getCenter().lat();
              return scope.center.coordinates[0] = circle.getCenter().lng();
            } else {
              scope.center.latitude = circle.getCenter().lat();
              return scope.center.longitude = circle.getCenter().lng();
            }
          });
        });
        scope.$on('$destroy', (function(_this) {
          return function() {
            _this.removeEvents(listeners);
            return circle.setMap(null);
          };
        })(this));
        $log.info(this);
      }

      return CircleParentModel;

    })(Builder);
  }
]);
