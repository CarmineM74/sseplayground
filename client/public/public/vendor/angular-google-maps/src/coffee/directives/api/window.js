var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

angular.module("uiGmapgoogle-maps.directives.api").factory("uiGmapWindow", [
  "uiGmapIWindow", "uiGmapGmapUtil", "uiGmapWindowChildModel", function(IWindow, GmapUtil, WindowChildModel) {
    var Window;
    return Window = (function(_super) {
      __extends(Window, _super);

      Window.include(GmapUtil);

      function Window() {
        this.link = __bind(this.link, this);
        Window.__super__.constructor.call(this);
        this.require = ['^' + 'uiGmapGoogleMap', '^?' + 'uiGmapMarker'];
        this.template = '<span class="angular-google-maps-window" ng-transclude></span>';
        this.$log.info(this);
        this.childWindows = [];
      }

      Window.prototype.link = function(scope, element, attrs, ctrls) {
        var markerCtrl, markerScope;
        markerCtrl = ctrls.length > 1 && (ctrls[1] != null) ? ctrls[1] : void 0;
        markerScope = markerCtrl != null ? markerCtrl.getScope() : void 0;
        this.mapPromise = IWindow.mapPromise(scope, ctrls[0]);
        return this.mapPromise.then((function(_this) {
          return function(mapCtrl) {
            var isIconVisibleOnClick;
            isIconVisibleOnClick = true;
            if (angular.isDefined(attrs.isiconvisibleonclick)) {
              isIconVisibleOnClick = scope.isIconVisibleOnClick;
            }
            if (!markerCtrl) {
              _this.init(scope, element, isIconVisibleOnClick, mapCtrl);
              return;
            }
            return markerScope.deferred.promise.then(function(gMarker) {
              return _this.init(scope, element, isIconVisibleOnClick, mapCtrl, markerScope);
            });
          };
        })(this));
      };

      Window.prototype.init = function(scope, element, isIconVisibleOnClick, mapCtrl, markerScope) {
        var childWindow, defaults, gMarker, hasScopeCoords, opts;
        defaults = scope.options != null ? scope.options : {};
        hasScopeCoords = (scope != null) && this.validateCoords(scope.coords);
        if ((markerScope != null ? markerScope['getGMarker'] : void 0) != null) {
          gMarker = markerScope.getGMarker();
        }
        opts = hasScopeCoords ? this.createWindowOptions(gMarker, scope, element.html(), defaults) : defaults;
        if (mapCtrl != null) {
          childWindow = new WindowChildModel({}, scope, opts, isIconVisibleOnClick, mapCtrl, markerScope, element);
          this.childWindows.push(childWindow);
          scope.$on("$destroy", (function(_this) {
            return function() {
              _this.childWindows = _.withoutObjects(_this.childWindows, [childWindow], function(child1, child2) {
                return child1.scope.$id === child2.scope.$id;
              });
              return _this.childWindows.length = 0;
            };
          })(this));
        }
        if (scope.control != null) {
          scope.control.getGWindows = (function(_this) {
            return function() {
              return _this.childWindows.map(function(child) {
                return child.gWin;
              });
            };
          })(this);
          scope.control.getChildWindows = (function(_this) {
            return function() {
              return _this.childWindows;
            };
          })(this);
          scope.control.showWindow = (function(_this) {
            return function() {
              return _this.childWindows.map(function(child) {
                return child.showWindow();
              });
            };
          })(this);
          scope.control.hideWindow = (function(_this) {
            return function() {
              return _this.childWindows.map(function(child) {
                return child.hideWindow();
              });
            };
          })(this);
        }
        if ((this.onChildCreation != null) && (childWindow != null)) {
          return this.onChildCreation(childWindow);
        }
      };

      return Window;

    })(IWindow);
  }
]);
