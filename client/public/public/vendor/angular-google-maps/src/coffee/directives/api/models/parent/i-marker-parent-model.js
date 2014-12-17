
/*
	- interface for all markers to derrive from
 	- to enforce a minimum set of requirements
 		- attributes
 			- coords
 			- icon
		- implementation needed on watches
 */
var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

angular.module("uiGmapgoogle-maps.directives.api.models.parent").factory("uiGmapIMarkerParentModel", [
  "uiGmapModelKey", "uiGmapLogger", function(ModelKey, Logger) {
    var IMarkerParentModel;
    IMarkerParentModel = (function(_super) {
      __extends(IMarkerParentModel, _super);

      IMarkerParentModel.prototype.DEFAULTS = {};

      function IMarkerParentModel(scope, element, attrs, map) {
        this.scope = scope;
        this.element = element;
        this.attrs = attrs;
        this.map = map;
        this.onDestroy = __bind(this.onDestroy, this);
        this.onWatch = __bind(this.onWatch, this);
        this.watch = __bind(this.watch, this);
        this.validateScope = __bind(this.validateScope, this);
        IMarkerParentModel.__super__.constructor.call(this, this.scope);
        this.$log = Logger;
        if (!this.validateScope(scope)) {
          throw new String("Unable to construct IMarkerParentModel due to invalid scope");
        }
        this.doClick = angular.isDefined(attrs.click);
        if (scope.options != null) {
          this.DEFAULTS = scope.options;
        }
        this.watch('coords', this.scope);
        this.watch('icon', this.scope);
        this.watch('options', this.scope);
        scope.$on("$destroy", (function(_this) {
          return function() {
            return _this.onDestroy(scope);
          };
        })(this));
      }

      IMarkerParentModel.prototype.validateScope = function(scope) {
        var ret;
        if (scope == null) {
          this.$log.error(this.constructor.name + ": invalid scope used");
          return false;
        }
        ret = scope.coords != null;
        if (!ret) {
          this.$log.error(this.constructor.name + ": no valid coords attribute found");
          return false;
        }
        return ret;
      };

      IMarkerParentModel.prototype.watch = function(propNameToWatch, scope, equalityCheck) {
        if (equalityCheck == null) {
          equalityCheck = true;
        }
        return scope.$watch(propNameToWatch, (function(_this) {
          return function(newValue, oldValue) {
            if (!_.isEqual(newValue, oldValue)) {
              return _this.onWatch(propNameToWatch, scope, newValue, oldValue);
            }
          };
        })(this), equalityCheck);
      };

      IMarkerParentModel.prototype.onWatch = function(propNameToWatch, scope, newValue, oldValue) {};

      IMarkerParentModel.prototype.onDestroy = function(scope) {
        throw new String("OnDestroy Not Implemented!!");
      };

      return IMarkerParentModel;

    })(ModelKey);
    return IMarkerParentModel;
  }
]);
