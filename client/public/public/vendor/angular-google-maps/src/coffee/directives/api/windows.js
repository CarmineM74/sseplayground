var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

angular.module("uiGmapgoogle-maps.directives.api").factory("uiGmapWindows", [
  "uiGmapIWindow", "uiGmapWindowsParentModel", "uiGmapPromise", function(IWindow, WindowsParentModel, uiGmapPromise) {

    /*
    Windows directive where many windows map to the models property
     */
    var Windows;
    return Windows = (function(_super) {
      __extends(Windows, _super);

      function Windows() {
        this.init = __bind(this.init, this);
        this.link = __bind(this.link, this);
        Windows.__super__.constructor.call(this);
        this.require = ['^' + 'uiGmapGoogleMap', '^?' + 'uiGmapMarkers'];
        this.template = '<span class="angular-google-maps-windows" ng-transclude></span>';
        this.scope.idKey = '=idkey';
        this.scope.doRebuildAll = '=dorebuildall';
        this.scope.models = '=models';
        this.$log.debug(this);
      }

      Windows.prototype.link = function(scope, element, attrs, ctrls) {
        var mapScope, markerCtrl, markerScope;
        mapScope = ctrls[0].getScope();
        markerCtrl = ctrls.length > 1 && (ctrls[1] != null) ? ctrls[1] : void 0;
        markerScope = markerCtrl != null ? markerCtrl.getScope() : void 0;
        return mapScope.deferred.promise.then((function(_this) {
          return function(map) {
            var promise, _ref;
            promise = (markerScope != null ? (_ref = markerScope.deferred) != null ? _ref.promise : void 0 : void 0) || uiGmapPromise.resolve();
            return promise.then(function() {
              var pieces, _ref1;
              pieces = (_ref1 = _this.parentModel) != null ? _ref1.existingPieces : void 0;
              if (pieces) {
                return pieces.then(function() {
                  return _this.init(scope, element, attrs, ctrls, map, markerScope);
                });
              } else {
                return _this.init(scope, element, attrs, ctrls, map, markerScope);
              }
            });
          };
        })(this));
      };

      Windows.prototype.init = function(scope, element, attrs, ctrls, map, additionalScope) {
        var parentModel;
        parentModel = new WindowsParentModel(scope, element, attrs, ctrls, map, additionalScope);
        if (scope.control != null) {
          scope.control.getGWindows = (function(_this) {
            return function() {
              return parentModel.windows.map(function(child) {
                return child.gWin;
              });
            };
          })(this);
          return scope.control.getChildWindows = (function(_this) {
            return function() {
              return parentModel.windows;
            };
          })(this);
        }
      };

      return Windows;

    })(IWindow);
  }
]);
