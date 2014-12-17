
/*
	WindowsChildModel generator where there are many ChildModels to a parent.
 */
var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

angular.module("google-maps.directives.api.models.parent".ns()).factory("WindowsParentModel".ns(), [
  "IWindowParentModel".ns(), "ModelsWatcher".ns(), "PropMap".ns(), "WindowChildModel".ns(), "Linked".ns(), "_async".ns(), "Logger".ns(), '$timeout', '$compile', '$http', '$templateCache', '$interpolate', 'uiGmapPromise', function(IWindowParentModel, ModelsWatcher, PropMap, WindowChildModel, Linked, _async, $log, $timeout, $compile, $http, $templateCache, $interpolate, uiGmapPromise) {
    var WindowsParentModel;
    WindowsParentModel = (function(_super) {
      __extends(WindowsParentModel, _super);

      WindowsParentModel.include(ModelsWatcher);

      function WindowsParentModel(scope, element, attrs, ctrls, gMap, markersScope) {
        var self;
        this.gMap = gMap;
        this.markersScope = markersScope;
        this.interpolateContent = __bind(this.interpolateContent, this);
        this.setChildScope = __bind(this.setChildScope, this);
        this.createWindow = __bind(this.createWindow, this);
        this.setContentKeys = __bind(this.setContentKeys, this);
        this.pieceMealWindows = __bind(this.pieceMealWindows, this);
        this.createAllNewWindows = __bind(this.createAllNewWindows, this);
        this.watchIdKey = __bind(this.watchIdKey, this);
        this.createChildScopesWindows = __bind(this.createChildScopesWindows, this);
        this.watchOurScope = __bind(this.watchOurScope, this);
        this.watchDestroy = __bind(this.watchDestroy, this);
        this.rebuildAll = __bind(this.rebuildAll, this);
        this.doINeedToWipe = __bind(this.doINeedToWipe, this);
        this.watchModels = __bind(this.watchModels, this);
        this.go = __bind(this.go, this);
        WindowsParentModel.__super__.constructor.call(this, scope, element, attrs, ctrls, $timeout, $compile, $http, $templateCache);
        self = this;
        this.windows = new PropMap();
        this.scopePropNames = ['coords', 'template', 'templateUrl', 'templateParameter', 'isIconVisibleOnClick', 'closeClick', 'options', 'show'];
        _.each(this.scopePropNames, (function(_this) {
          return function(name) {
            return _this[name + 'Key'] = void 0;
          };
        })(this));
        this.linked = new Linked(scope, element, attrs, ctrls);
        this.models = void 0;
        this.contentKeys = void 0;
        this.isIconVisibleOnClick = void 0;
        this.firstTime = true;
        this.firstWatchModels = true;
        this.$log.info(self);
        this.parentScope = void 0;
        this.go(scope);
      }

      WindowsParentModel.prototype.go = function(scope) {
        this.watchOurScope(scope);
        this.doRebuildAll = this.scope.doRebuildAll != null ? this.scope.doRebuildAll : false;
        scope.$watch('doRebuildAll', (function(_this) {
          return function(newValue, oldValue) {
            if (newValue !== oldValue) {
              return _this.doRebuildAll = newValue;
            }
          };
        })(this));
        return this.createChildScopesWindows();
      };

      WindowsParentModel.prototype.watchModels = function(scope) {
        return scope.$watch('models', (function(_this) {
          return function(newValue, oldValue) {
            var doScratch;
            if (!_.isEqual(newValue, oldValue) || _this.firstWatchModels) {
              _this.firstWatchModels = false;
              if (_this.doRebuildAll || _this.doINeedToWipe(newValue)) {
                return _this.rebuildAll(scope, true, true);
              } else {
                doScratch = _this.windows.length === 0;
                if (_this.existingPieces != null) {
                  return _this.existingPieces.then(function() {
                    return _this.createChildScopesWindows(doScratch);
                  });
                } else {
                  return _this.createChildScopesWindows(doScratch);
                }
              }
            }
          };
        })(this), true);
      };

      WindowsParentModel.prototype.doINeedToWipe = function(newValue) {
        var newValueIsEmpty;
        newValueIsEmpty = newValue != null ? newValue.length === 0 : true;
        return this.windows.length > 0 && newValueIsEmpty;
      };

      WindowsParentModel.prototype.rebuildAll = function(scope, doCreate, doDelete) {
        return _async.waitOrGo(this, (function(_this) {
          return function() {
            return _async.each(_this.windows.values(), function(model) {
              return model.destroy();
            }).then(function() {
              if (doDelete) {
                delete _this.windows;
              }
              _this.windows = new PropMap();
              if (doCreate) {
                _this.createChildScopesWindows();
              }
              return uiGmapPromise.resolve();
            });
          };
        })(this));
      };

      WindowsParentModel.prototype.watchDestroy = function(scope) {
        return scope.$on("$destroy", (function(_this) {
          return function() {
            _this.firstWatchModels = true;
            _this.firstTime = true;
            return _this.rebuildAll(scope, false, true);
          };
        })(this));
      };

      WindowsParentModel.prototype.watchOurScope = function(scope) {
        return _.each(this.scopePropNames, (function(_this) {
          return function(name) {
            var nameKey;
            nameKey = name + 'Key';
            return _this[nameKey] = typeof scope[name] === 'function' ? scope[name]() : scope[name];
          };
        })(this));
      };

      WindowsParentModel.prototype.createChildScopesWindows = function(isCreatingFromScratch) {
        var modelsNotDefined, _ref, _ref1;
        if (isCreatingFromScratch == null) {
          isCreatingFromScratch = true;
        }

        /*
        being that we cannot tell the difference in Key String vs. a normal value string (TemplateUrl)
        we will assume that all scope values are string expressions either pointing to a key (propName) or using
        'self' to point the model as container/object of interest.
        
        This may force redundant information into the model, but this appears to be the most flexible approach.
         */
        this.isIconVisibleOnClick = true;
        if (angular.isDefined(this.linked.attrs.isiconvisibleonclick)) {
          this.isIconVisibleOnClick = this.linked.scope.isIconVisibleOnClick;
        }
        modelsNotDefined = angular.isUndefined(this.linked.scope.models);
        if (modelsNotDefined && (this.markersScope === void 0 || (((_ref = this.markersScope) != null ? _ref.markerModels : void 0) === void 0 || ((_ref1 = this.markersScope) != null ? _ref1.models : void 0) === void 0))) {
          this.$log.error("No models to create windows from! Need direct models or models derrived from markers!");
          return;
        }
        if (this.gMap != null) {
          if (this.linked.scope.models != null) {
            this.watchIdKey(this.linked.scope);
            if (isCreatingFromScratch) {
              return this.createAllNewWindows(this.linked.scope, false);
            } else {
              return this.pieceMealWindows(this.linked.scope, false);
            }
          } else {
            this.parentScope = this.markersScope;
            this.watchIdKey(this.parentScope);
            if (isCreatingFromScratch) {
              return this.createAllNewWindows(this.markersScope, true, 'markerModels', false);
            } else {
              return this.pieceMealWindows(this.markersScope, true, 'markerModels', false);
            }
          }
        }
      };

      WindowsParentModel.prototype.watchIdKey = function(scope) {
        this.setIdKey(scope);
        return scope.$watch('idKey', (function(_this) {
          return function(newValue, oldValue) {
            if (newValue !== oldValue && (newValue == null)) {
              _this.idKey = newValue;
              return _this.rebuildAll(scope, true, true);
            }
          };
        })(this));
      };

      WindowsParentModel.prototype.createAllNewWindows = function(scope, hasGMarker, modelsPropToIterate, isArray) {
        if (modelsPropToIterate == null) {
          modelsPropToIterate = 'models';
        }
        if (isArray == null) {
          isArray = false;
        }
        this.models = scope.models;
        if (this.firstTime) {
          this.watchModels(scope);
          this.watchDestroy(scope);
        }
        this.setContentKeys(scope.models);
        return _async.waitOrGo(this, (function(_this) {
          return function() {
            return _async.each(scope.models, function(model) {
              var gMarker, _ref;
              gMarker = hasGMarker ? (_ref = scope[modelsPropToIterate][[model[_this.idKey]]]) != null ? _ref.gMarker : void 0 : void 0;
              return _this.createWindow(model, gMarker, _this.gMap);
            });
          };
        })(this)).then((function(_this) {
          return function() {
            return _this.firstTime = false;
          };
        })(this));
      };

      WindowsParentModel.prototype.pieceMealWindows = function(scope, hasGMarker, modelsPropToIterate, isArray) {
        var doChunk;
        if (modelsPropToIterate == null) {
          modelsPropToIterate = 'models';
        }
        if (isArray == null) {
          isArray = true;
        }
        doChunk = this.existingPieces != null ? false : _async.defaultChunkSize;
        this.models = scope.models;
        if ((scope != null) && (scope.models != null) && scope.models.length > 0 && this.windows.length > 0) {
          return this.figureOutState(this.idKey, scope, this.windows, this.modelKeyComparison, (function(_this) {
            return function(state) {
              var payload;
              payload = state;
              return _async.waitOrGo(_this, function() {
                return _async.each(payload.removals, function(child) {
                  if (child != null) {
                    _this.windows.remove(child.id);
                    if (child.destroy != null) {
                      return child.destroy(true);
                    }
                  }
                }, doChunk).then(function() {
                  return _async.each(payload.adds, function(modelToAdd) {
                    var gMarker, _ref;
                    gMarker = (_ref = scope[modelsPropToIterate][modelToAdd[_this.idKey]]) != null ? _ref.gMarker : void 0;
                    if (!gMarker) {
                      throw "Gmarker undefined";
                    }
                    return _this.createWindow(modelToAdd, gMarker, _this.gMap);
                  }, doChunk);
                });
              }).then(function() {
                return _this.existingPieces = void 0;
              })["catch"](function(e) {
                return $log.error("Error while pieceMealing Windows!");
              });
            };
          })(this));
        } else {
          return this.rebuildAll(this.scope, true, true);
        }
      };

      WindowsParentModel.prototype.setContentKeys = function(models) {
        if (models.length > 0) {
          return this.contentKeys = Object.keys(models[0]);
        }
      };

      WindowsParentModel.prototype.createWindow = function(model, gMarker, gMap) {
        var child, childScope, fakeElement, opts, _ref, _ref1;
        childScope = this.linked.scope.$new(false);
        this.setChildScope(childScope, model);
        childScope.$watch('model', (function(_this) {
          return function(newValue, oldValue) {
            if (newValue !== oldValue) {
              return _this.setChildScope(childScope, newValue);
            }
          };
        })(this), true);
        fakeElement = {
          html: (function(_this) {
            return function() {
              return _this.interpolateContent(_this.linked.element.html(), model);
            };
          })(this)
        };
        this.DEFAULTS = this.markersScope ? model[this.optionsKey] || {} : this.DEFAULTS;
        opts = this.createWindowOptions(gMarker, childScope, fakeElement.html(), this.DEFAULTS);
        child = new WindowChildModel(model, childScope, opts, this.isIconVisibleOnClick, gMap, (_ref = this.markersScope) != null ? (_ref1 = _ref.markerModels[model[this.idKey]]) != null ? _ref1.scope : void 0 : void 0, fakeElement, false, true);
        if (model[this.idKey] == null) {
          this.$log.error("Window model has no id to assign a child to. This is required for performance. Please assign id, or redirect id to a different key.");
          return;
        }
        this.windows.put(model[this.idKey], child);
        return child;
      };

      WindowsParentModel.prototype.setChildScope = function(childScope, model) {
        _.each(this.scopePropNames, (function(_this) {
          return function(name) {
            var nameKey, newValue;
            nameKey = name + 'Key';
            newValue = _this[nameKey] === 'self' ? model : model[_this[nameKey]];
            if (newValue !== childScope[name]) {
              return childScope[name] = newValue;
            }
          };
        })(this));
        return childScope.model = model;
      };

      WindowsParentModel.prototype.interpolateContent = function(content, model) {
        var exp, interpModel, key, _i, _len, _ref;
        if (this.contentKeys === void 0 || this.contentKeys.length === 0) {
          return;
        }
        exp = $interpolate(content);
        interpModel = {};
        _ref = this.contentKeys;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          key = _ref[_i];
          interpModel[key] = model[key];
        }
        return exp(interpModel);
      };

      return WindowsParentModel;

    })(IWindowParentModel);
    return WindowsParentModel;
  }
]);
