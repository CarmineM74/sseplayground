var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

angular.module('uiGmapgoogle-maps.directives.api.models.parent').factory('uiGmapLayerParentModel', [
  'uiGmapBaseObject', 'uiGmapLogger', '$timeout', function(BaseObject, Logger, $timeout) {
    var LayerParentModel;
    LayerParentModel = (function(_super) {
      __extends(LayerParentModel, _super);

      function LayerParentModel(scope, element, attrs, gMap, onLayerCreated, $log) {
        this.scope = scope;
        this.element = element;
        this.attrs = attrs;
        this.gMap = gMap;
        this.onLayerCreated = onLayerCreated != null ? onLayerCreated : void 0;
        this.$log = $log != null ? $log : Logger;
        this.createGoogleLayer = __bind(this.createGoogleLayer, this);
        if (this.attrs.type == null) {
          this.$log.info('type attribute for the layer directive is mandatory. Layer creation aborted!!');
          return;
        }
        this.createGoogleLayer();
        this.doShow = true;
        if (angular.isDefined(this.attrs.show)) {
          this.doShow = this.scope.show;
        }
        if (this.doShow && (this.gMap != null)) {
          this.layer.setMap(this.gMap);
        }
        this.scope.$watch('show', (function(_this) {
          return function(newValue, oldValue) {
            if (newValue !== oldValue) {
              _this.doShow = newValue;
              if (newValue) {
                return _this.layer.setMap(_this.gMap);
              } else {
                return _this.layer.setMap(null);
              }
            }
          };
        })(this), true);
        this.scope.$watch('options', (function(_this) {
          return function(newValue, oldValue) {
            if (newValue !== oldValue) {
              _this.layer.setMap(null);
              _this.layer = null;
              return _this.createGoogleLayer();
            }
          };
        })(this), true);
        this.scope.$on('$destroy', (function(_this) {
          return function() {
            return _this.layer.setMap(null);
          };
        })(this));
      }

      LayerParentModel.prototype.createGoogleLayer = function() {
        var _base;
        if (this.attrs.options == null) {
          this.layer = this.attrs.namespace === void 0 ? new google.maps[this.attrs.type]() : new google.maps[this.attrs.namespace][this.attrs.type]();
        } else {
          this.layer = this.attrs.namespace === void 0 ? new google.maps[this.attrs.type](this.scope.options) : new google.maps[this.attrs.namespace][this.attrs.type](this.scope.options);
        }
        if ((this.layer != null) && (this.onLayerCreated != null)) {
          return typeof (_base = this.onLayerCreated(this.scope, this.layer)) === "function" ? _base(this.layer) : void 0;
        }
      };

      return LayerParentModel;

    })(BaseObject);
    return LayerParentModel;
  }
]);
