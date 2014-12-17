var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

angular.module("google-maps.directives.api.models.parent".ns()).factory("MapTypeParentModel".ns(), [
  "BaseObject".ns(), "Logger".ns(), '$timeout', function(BaseObject, Logger, $timeout) {
    var MapTypeParentModel;
    MapTypeParentModel = (function(_super) {
      __extends(MapTypeParentModel, _super);

      function MapTypeParentModel(scope, element, attrs, gMap, $log) {
        this.scope = scope;
        this.element = element;
        this.attrs = attrs;
        this.gMap = gMap;
        this.$log = $log != null ? $log : Logger;
        this.hideOverlay = __bind(this.hideOverlay, this);
        this.showOverlay = __bind(this.showOverlay, this);
        this.refreshMapType = __bind(this.refreshMapType, this);
        this.createMapType = __bind(this.createMapType, this);
        if (this.attrs.options == null) {
          this.$log.info("options attribute for the map-type directive is mandatory. Map type creation aborted!!");
          return;
        }
        this.id = this.gMap.overlayMapTypesCount = this.gMap.overlayMapTypesCount + 1 || 0;
        this.doShow = true;
        this.createMapType();
        if (angular.isDefined(this.attrs.show)) {
          this.doShow = this.scope.show;
        }
        if (this.doShow && (this.gMap != null)) {
          this.showOverlay();
        }
        this.scope.$watch("show", (function(_this) {
          return function(newValue, oldValue) {
            if (newValue !== oldValue) {
              _this.doShow = newValue;
              if (newValue) {
                return _this.showOverlay();
              } else {
                return _this.hideOverlay();
              }
            }
          };
        })(this), true);
        this.scope.$watch("options", (function(_this) {
          return function(newValue, oldValue) {
            if (!_.isEqual(newValue, oldValue)) {
              return _this.refreshMapType();
            }
          };
        })(this), true);
        if (angular.isDefined(this.attrs.refresh)) {
          this.scope.$watch("refresh", (function(_this) {
            return function(newValue, oldValue) {
              if (!_.isEqual(newValue, oldValue)) {
                return _this.refreshMapType();
              }
            };
          })(this), true);
        }
        this.scope.$on("$destroy", (function(_this) {
          return function() {
            _this.hideOverlay();
            return _this.mapType = null;
          };
        })(this));
      }

      MapTypeParentModel.prototype.createMapType = function() {
        if (this.scope.options.getTile != null) {
          this.mapType = this.scope.options;
        } else if (this.scope.options.getTileUrl != null) {
          this.mapType = new google.maps.ImageMapType(this.scope.options);
        } else {
          this.$log.info("options should provide either getTile or getTileUrl methods. Map type creation aborted!!");
          return;
        }
        if (this.attrs.id && this.scope.id) {
          this.gMap.mapTypes.set(this.scope.id, this.mapType);
          if (!angular.isDefined(this.attrs.show)) {
            this.doShow = false;
          }
        }
        return this.mapType.layerId = this.id;
      };

      MapTypeParentModel.prototype.refreshMapType = function() {
        this.hideOverlay();
        this.mapType = null;
        this.createMapType();
        if (this.doShow && (this.gMap != null)) {
          return this.showOverlay();
        }
      };

      MapTypeParentModel.prototype.showOverlay = function() {
        return this.gMap.overlayMapTypes.push(this.mapType);
      };

      MapTypeParentModel.prototype.hideOverlay = function() {
        var found;
        found = false;
        return this.gMap.overlayMapTypes.forEach((function(_this) {
          return function(mapType, index) {
            if (!found && mapType.layerId === _this.id) {
              found = true;
              _this.gMap.overlayMapTypes.removeAt(index);
            }
          };
        })(this));
      };

      return MapTypeParentModel;

    })(BaseObject);
    return MapTypeParentModel;
  }
]);
