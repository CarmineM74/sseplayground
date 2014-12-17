var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

angular.module("google-maps.directives.api".ns()).factory("Polygon".ns(), [
  "IPolygon".ns(), "$timeout", "array-sync".ns(), "PolygonChildModel".ns(), function(IPolygon, $timeout, arraySync, PolygonChild) {
    var Polygon;
    return Polygon = (function(_super) {
      __extends(Polygon, _super);

      function Polygon() {
        this.link = __bind(this.link, this);
        return Polygon.__super__.constructor.apply(this, arguments);
      }

      Polygon.prototype.link = function(scope, element, attrs, mapCtrl) {
        var children, promise;
        children = [];
        promise = IPolygon.mapPromise(scope, mapCtrl);
        if (scope.control != null) {
          scope.control.getInstance = this;
          scope.control.polygons = children;
          scope.control.promise = promise;
        }
        return promise.then((function(_this) {
          return function(map) {
            return children.push(new PolygonChild(scope, attrs, map, _this.DEFAULTS));
          };
        })(this));
      };

      return Polygon;

    })(IPolygon);
  }
]);
