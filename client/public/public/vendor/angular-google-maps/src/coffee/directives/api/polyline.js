var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

angular.module("google-maps.directives.api".ns()).factory("Polyline".ns(), [
  "IPolyline".ns(), "$timeout", "array-sync".ns(), "PolylineChildModel".ns(), function(IPolyline, $timeout, arraySync, PolylineChildModel) {
    var Polyline;
    return Polyline = (function(_super) {
      __extends(Polyline, _super);

      function Polyline() {
        this.link = __bind(this.link, this);
        return Polyline.__super__.constructor.apply(this, arguments);
      }

      Polyline.prototype.link = function(scope, element, attrs, mapCtrl) {
        if (angular.isUndefined(scope.path) || scope.path === null || !this.validatePath(scope.path)) {
          this.$log.error("polyline: no valid path attribute found");
          return;
        }
        return IPolyline.mapPromise(scope, mapCtrl).then((function(_this) {
          return function(map) {
            return new PolylineChildModel(scope, attrs, map, _this.DEFAULTS);
          };
        })(this));
      };

      return Polyline;

    })(IPolyline);
  }
]);
