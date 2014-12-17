var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

angular.module('uiGmapgoogle-maps.directives.api.models.child').factory('uiGmapWindowChildModel', [
  'uiGmapBaseObject', 'uiGmapGmapUtil', 'uiGmapLogger', '$compile', '$http', '$templateCache', 'uiGmapChromeFixes', 'uiGmapEventsHelper', function(BaseObject, GmapUtil, $log, $compile, $http, $templateCache, ChromeFixes, EventsHelper) {
    var WindowChildModel;
    WindowChildModel = (function(_super) {
      __extends(WindowChildModel, _super);

      WindowChildModel.include(GmapUtil);

      WindowChildModel.include(EventsHelper);

      function WindowChildModel(model, scope, opts, isIconVisibleOnClick, mapCtrl, markerScope, element, needToManualDestroy, markerIsVisibleAfterWindowClose) {
        this.model = model;
        this.scope = scope;
        this.opts = opts;
        this.isIconVisibleOnClick = isIconVisibleOnClick;
        this.mapCtrl = mapCtrl;
        this.markerScope = markerScope;
        this.element = element;
        this.needToManualDestroy = needToManualDestroy != null ? needToManualDestroy : false;
        this.markerIsVisibleAfterWindowClose = markerIsVisibleAfterWindowClose != null ? markerIsVisibleAfterWindowClose : true;
        this.destroy = __bind(this.destroy, this);
        this.remove = __bind(this.remove, this);
        this.getLatestPosition = __bind(this.getLatestPosition, this);
        this.hideWindow = __bind(this.hideWindow, this);
        this.showWindow = __bind(this.showWindow, this);
        this.handleClick = __bind(this.handleClick, this);
        this.watchOptions = __bind(this.watchOptions, this);
        this.watchCoords = __bind(this.watchCoords, this);
        this.createGWin = __bind(this.createGWin, this);
        this.watchElement = __bind(this.watchElement, this);
        this.watchAndDoShow = __bind(this.watchAndDoShow, this);
        this.doShow = __bind(this.doShow, this);
        this.getGmarker = function() {
          var _ref, _ref1;
          if (((_ref = this.markerScope) != null ? _ref['getGMarker'] : void 0) != null) {
            return (_ref1 = this.markerScope) != null ? _ref1.getGMarker() : void 0;
          }
        };
        this.listeners = [];
        this.createGWin();
        if (this.getGmarker() != null) {
          this.getGmarker().setClickable(true);
        }
        this.watchElement();
        this.watchOptions();
        this.watchCoords();
        this.watchAndDoShow();
        this.scope.$on('$destroy', (function(_this) {
          return function() {
            return _this.destroy();
          };
        })(this));
        $log.info(this);
      }

      WindowChildModel.prototype.doShow = function() {
        if (this.scope.show) {
          return this.showWindow();
        } else {
          return this.hideWindow();
        }
      };

      WindowChildModel.prototype.watchAndDoShow = function() {
        if (this.model.show != null) {
          this.scope.show = this.model.show;
        }
        this.scope.$watch('show', this.doShow, true);
        return this.doShow();
      };

      WindowChildModel.prototype.watchElement = function() {
        return this.scope.$watch((function(_this) {
          return function() {
            var _ref;
            if (!(_this.element || _this.html)) {
              return;
            }
            if (_this.html !== _this.element.html() && _this.gWin) {
              if ((_ref = _this.opts) != null) {
                _ref.content = void 0;
              }
              _this.remove();
              return _this.createGWin();
            }
          };
        })(this));
      };

      WindowChildModel.prototype.createGWin = function() {
        var defaults, _opts, _ref, _ref1;
        if (this.gWin == null) {
          defaults = {};
          if (this.opts != null) {
            if (this.scope.coords) {
              this.opts.position = this.getCoords(this.scope.coords);
            }
            defaults = this.opts;
          }
          if (this.element) {
            this.html = _.isObject(this.element) ? this.element.html() : this.element;
          }
          _opts = this.scope.options ? this.scope.options : defaults;
          this.opts = this.createWindowOptions(this.getGmarker(), this.markerScope || this.scope, this.html, _opts);
        }
        if ((this.opts != null) && !this.gWin) {
          if (this.opts.boxClass && (window.InfoBox && typeof window.InfoBox === 'function')) {
            this.gWin = new window.InfoBox(this.opts);
          } else {
            this.gWin = new google.maps.InfoWindow(this.opts);
          }
          this.handleClick((_ref = this.scope) != null ? (_ref1 = _ref.options) != null ? _ref1.forceClick : void 0 : void 0);
          this.doShow();
          return this.listeners.push(google.maps.event.addListener(this.gWin, 'closeclick', (function(_this) {
            return function() {
              if (_this.getGmarker()) {
                _this.getGmarker().setAnimation(_this.oldMarkerAnimation);
                if (_this.markerIsVisibleAfterWindowClose) {
                  _.delay(function() {
                    _this.getGmarker().setVisible(false);
                    return _this.getGmarker().setVisible(_this.markerIsVisibleAfterWindowClose);
                  }, 250);
                }
              }
              _this.gWin.isOpen(false);
              _this.model.show = false;
              if (_this.scope.closeClick != null) {
                return _this.scope.$apply(_this.scope.closeClick());
              } else {
                return _this.scope.$apply();
              }
            };
          })(this)));
        }
      };

      WindowChildModel.prototype.watchCoords = function() {
        var scope;
        scope = this.markerScope != null ? this.markerScope : this.scope;
        return scope.$watch('coords', (function(_this) {
          return function(newValue, oldValue) {
            var pos;
            if (newValue !== oldValue) {
              if (newValue == null) {
                _this.hideWindow();
              } else if (!_this.validateCoords(newValue)) {
                $log.error("WindowChildMarker cannot render marker as scope.coords as no position on marker: " + (JSON.stringify(_this.model)));
                return;
              }
              pos = _this.getCoords(newValue);
              _this.gWin.setPosition(pos);
              if (_this.opts) {
                return _this.opts.position = pos;
              }
            }
          };
        })(this), true);
      };

      WindowChildModel.prototype.watchOptions = function() {
        return this.scope.$watch('options', (function(_this) {
          return function(newValue, oldValue) {
            if (newValue !== oldValue) {
              _this.opts = newValue;
              if (_this.gWin != null) {
                _this.gWin.setOptions(_this.opts);
                if ((_this.opts.visible != null) && _this.opts.visible) {
                  return _this.showWindow();
                } else if (_this.opts.visible != null) {
                  return _this.hideWindow();
                }
              }
            }
          };
        })(this), true);
      };

      WindowChildModel.prototype.handleClick = function(forceClick) {
        var click, marker;
        if (this.gWin == null) {
          return;
        }
        click = (function(_this) {
          return function() {
            var pos, _ref, _ref1;
            if (_this.gWin == null) {
              _this.createGWin();
            }
            pos = _this.scope.coords != null ? (_ref = _this.gWin) != null ? _ref.getPosition() : void 0 : (_ref1 = _this.getGmarker()) != null ? _ref1.getPosition() : void 0;
            if (!pos) {
              return;
            }
            if (_this.gWin != null) {
              _this.gWin.setPosition(pos);
              if (_this.opts) {
                _this.opts.position = pos;
              }
              _this.showWindow();
            }
            if (_this.getGmarker() != null) {
              _this.initialMarkerVisibility = _this.getGmarker().getVisible();
              _this.oldMarkerAnimation = _this.getGmarker().getAnimation();
              return _this.getGmarker().setVisible(_this.isIconVisibleOnClick);
            }
          };
        })(this);
        if (forceClick) {
          click();
        }
        marker = this.getGmarker();
        if (marker) {
          return this.listeners = this.listeners.concat(this.setEvents(marker, {
            events: {
              click: click
            }
          }, this.model));
        }
      };

      WindowChildModel.prototype.showWindow = function() {
        var compiled, show, templateScope;
        if (this.gWin != null) {
          show = (function(_this) {
            return function() {
              return _.defer(function() {
                if (!_this.gWin.isOpen()) {
                  _this.gWin.open(_this.mapCtrl, _this.getGmarker() ? _this.getGmarker() : void 0);
                  _this.model.show = _this.gWin.isOpen();
                  return _.defer(function() {
                    return ChromeFixes.maybeRepaint(_this.gWin.content);
                  });
                }
              });
            };
          })(this);
          if (this.scope.templateUrl) {
            return $http.get(this.scope.templateUrl, {
              cache: $templateCache
            }).then((function(_this) {
              return function(content) {
                var compiled, templateScope;
                templateScope = _this.scope.$new();
                if (angular.isDefined(_this.scope.templateParameter)) {
                  templateScope.parameter = _this.scope.templateParameter;
                }
                compiled = $compile(content.data)(templateScope);
                _this.gWin.setContent(compiled[0]);
                return show();
              };
            })(this));
          } else if (this.scope.template) {
            templateScope = this.scope.$new();
            if (angular.isDefined(this.scope.templateParameter)) {
              templateScope.parameter = this.scope.templateParameter;
            }
            compiled = $compile(this.scope.template)(templateScope);
            this.gWin.setContent(compiled[0]);
            return show();
          } else {
            return show();
          }
        }
      };

      WindowChildModel.prototype.hideWindow = function() {
        if ((this.gWin != null) && this.gWin.isOpen()) {
          return this.gWin.close();
        }
      };

      WindowChildModel.prototype.getLatestPosition = function(overridePos) {
        if ((this.gWin != null) && (this.getGmarker() != null) && !overridePos) {
          return this.gWin.setPosition(this.getGmarker().getPosition());
        } else {
          if (overridePos) {
            return this.gWin.setPosition(overridePos);
          }
        }
      };

      WindowChildModel.prototype.remove = function() {
        this.hideWindow();
        this.removeEvents(this.listeners);
        this.listeners.length = 0;
        delete this.gWin;
        return delete this.opts;
      };

      WindowChildModel.prototype.destroy = function(manualOverride) {
        var _ref;
        if (manualOverride == null) {
          manualOverride = false;
        }
        this.remove();
        if ((this.scope != null) && !((_ref = this.scope) != null ? _ref.$$destroyed : void 0) && (this.needToManualDestroy || manualOverride)) {
          return this.scope.$destroy();
        }
      };

      return WindowChildModel;

    })(BaseObject);
    return WindowChildModel;
  }
]);
