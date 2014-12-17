var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

angular.module('uiGmapgoogle-maps.directives.api.models.child').factory('uiGmapMarkerChildModel', [
  'uiGmapModelKey', 'uiGmapGmapUtil', 'uiGmapLogger', 'uiGmapEventsHelper', 'uiGmapPropertyAction', 'uiGmapMarkerOptions', 'uiGmapIMarker', 'uiGmapMarkerManager', 'uiGmapPromise', function(ModelKey, GmapUtil, $log, EventsHelper, PropertyAction, MarkerOptions, IMarker, MarkerManager, uiGmapPromise) {
    var MarkerChildModel, keys;
    keys = ['coords', 'icon', 'options', 'fit'];
    MarkerChildModel = (function(_super) {
      var destroy;

      __extends(MarkerChildModel, _super);

      MarkerChildModel.include(GmapUtil);

      MarkerChildModel.include(EventsHelper);

      MarkerChildModel.include(MarkerOptions);

      destroy = function(child) {
        if ((child != null ? child.gMarker : void 0) != null) {
          child.removeEvents(child.externalListeners);
          child.removeEvents(child.internalListeners);
          if (child != null ? child.gMarker : void 0) {
            if (child.removeFromManager) {
              child.gMarkerManager.remove(child.gMarker);
            }
            child.gMarker.setMap(null);
            return child.gMarker = null;
          }
        }
      };

      function MarkerChildModel(scope, model, keys, gMap, defaults, doClick, gMarkerManager, doDrawSelf, trackModel, needRedraw) {
        var action;
        this.model = model;
        this.keys = keys;
        this.gMap = gMap;
        this.defaults = defaults;
        this.doClick = doClick;
        this.gMarkerManager = gMarkerManager;
        this.doDrawSelf = doDrawSelf != null ? doDrawSelf : true;
        this.trackModel = trackModel != null ? trackModel : true;
        this.needRedraw = needRedraw != null ? needRedraw : false;
        this.internalEvents = __bind(this.internalEvents, this);
        this.setLabelOptions = __bind(this.setLabelOptions, this);
        this.setOptions = __bind(this.setOptions, this);
        this.setIcon = __bind(this.setIcon, this);
        this.setCoords = __bind(this.setCoords, this);
        this.isNotValid = __bind(this.isNotValid, this);
        this.maybeSetScopeValue = __bind(this.maybeSetScopeValue, this);
        this.createMarker = __bind(this.createMarker, this);
        this.setMyScope = __bind(this.setMyScope, this);
        this.destroy = __bind(this.destroy, this);
        this.deferred = uiGmapPromise.defer();
        _.each(this.keys, (function(_this) {
          return function(v, k) {
            return _this[k + 'Key'] = _.isFunction(_this.keys[k]) ? _this.keys[k]() : _this.keys[k];
          };
        })(this));
        this.idKey = this.idKeyKey || 'id';
        if (this.model[this.idKey] != null) {
          this.id = this.model[this.idKey];
        }
        MarkerChildModel.__super__.constructor.call(this, scope);
        this.scope.getGMarker = (function(_this) {
          return function() {
            return _this.gMarker;
          };
        })(this);
        this.firstTime = true;
        if (this.trackModel) {
          this.scope.model = this.model;
          this.scope.$watch('model', (function(_this) {
            return function(newValue, oldValue) {
              var changes;
              if (newValue !== oldValue) {
                changes = _this.getChanges(newValue, oldValue, IMarker.keys);
                if (!_this.firstTime) {
                  return _.each(changes, function(v, k) {
                    _this.setMyScope(k, newValue, oldValue);
                    return _this.needRedraw = true;
                  });
                }
              }
            };
          })(this), true);
        } else {
          action = new PropertyAction((function(_this) {
            return function(calledKey, newVal) {
              if (!_this.firstTime) {
                return _this.setMyScope(calledKey, scope);
              }
            };
          })(this), false);
          _.each(this.keys, function(v, k) {
            return scope.$watch(k, action.sic, true);
          });
        }
        this.scope.$on('$destroy', (function(_this) {
          return function() {
            return destroy(_this);
          };
        })(this));
        this.setMyScope('all', this.model, void 0, true);
        this.createMarker(this.model);
        $log.info(this);
      }

      MarkerChildModel.prototype.destroy = function(removeFromManager) {
        if (removeFromManager == null) {
          removeFromManager = true;
        }
        this.removeFromManager = removeFromManager;
        return this.scope.$destroy();
      };

      MarkerChildModel.prototype.setMyScope = function(thingThatChanged, model, oldModel, isInit) {
        var justCreated;
        if (oldModel == null) {
          oldModel = void 0;
        }
        if (isInit == null) {
          isInit = false;
        }
        if (model == null) {
          model = this.model;
        }
        if (!this.gMarker) {
          this.setOptions(this.scope);
          justCreated = true;
        }
        switch (thingThatChanged) {
          case 'all':
            return _.each(this.keys, (function(_this) {
              return function(v, k) {
                return _this.setMyScope(k, model, oldModel, isInit);
              };
            })(this));
          case 'icon':
            return this.maybeSetScopeValue('icon', model, oldModel, this.iconKey, this.evalModelHandle, isInit, this.setIcon);
          case 'coords':
            return this.maybeSetScopeValue('coords', model, oldModel, this.coordsKey, this.evalModelHandle, isInit, this.setCoords);
          case 'options':
            if (!justCreated) {
              return this.createMarker(model, oldModel, isInit);
            }
        }
      };

      MarkerChildModel.prototype.createMarker = function(model, oldModel, isInit) {
        if (oldModel == null) {
          oldModel = void 0;
        }
        if (isInit == null) {
          isInit = false;
        }
        this.maybeSetScopeValue('options', model, oldModel, this.optionsKey, this.evalModelHandle, isInit, this.setOptions);
        return this.firstTime = false;
      };

      MarkerChildModel.prototype.maybeSetScopeValue = function(scopePropName, model, oldModel, modelKey, evaluate, isInit, gSetter) {
        var newValue, oldVal, toSet;
        if (gSetter == null) {
          gSetter = void 0;
        }
        if (oldModel === void 0) {
          toSet = evaluate(model, modelKey);
          if (toSet !== this.scope[scopePropName]) {
            this.scope[scopePropName] = toSet;
          }
          if (gSetter != null) {
            gSetter(this.scope);
          }
          return;
        }
        oldVal = evaluate(oldModel, modelKey);
        newValue = evaluate(model, modelKey);
        if (newValue !== oldVal) {
          this.scope[scopePropName] = newValue;
          if (!isInit) {
            if (gSetter != null) {
              gSetter(this.scope);
            }
            if (this.doDrawSelf) {
              return this.gMarkerManager.draw();
            }
          }
        }
      };

      MarkerChildModel.prototype.isNotValid = function(scope, doCheckGmarker) {
        var hasIdenticalScopes, hasNoGmarker;
        if (doCheckGmarker == null) {
          doCheckGmarker = true;
        }
        hasNoGmarker = !doCheckGmarker ? false : this.gMarker === void 0;
        hasIdenticalScopes = !this.trackModel ? scope.$id !== this.scope.$id : false;
        return hasIdenticalScopes || hasNoGmarker;
      };

      MarkerChildModel.prototype.setCoords = function(scope) {
        if (this.isNotValid(scope) || (this.gMarker == null)) {
          return;
        }
        if (this.getProp(this.coordsKey, this.model) != null) {
          if (!this.validateCoords(this.getProp(this.coordsKey, this.model))) {
            $log.debug('MarkerChild does not have coords yet. They may be defined later.');
            return;
          }
          this.gMarker.setPosition(this.getCoords(this.getProp(this.coordsKey, this.model)));
          this.gMarker.setVisible(this.validateCoords(this.getProp(this.coordsKey, this.model)));
          return this.gMarkerManager.add(this.gMarker);
        } else {
          return this.gMarkerManager.remove(this.gMarker);
        }
      };

      MarkerChildModel.prototype.setIcon = function(scope) {
        if (this.isNotValid(scope) || (this.gMarker == null)) {
          return;
        }
        this.gMarker.setIcon(this.getProp(this.iconKey, this.model));
        this.gMarkerManager.add(this.gMarker);
        this.gMarker.setPosition(this.getCoords(this.getProp(this.coordsKey, this.model)));
        return this.gMarker.setVisible(this.validateCoords(this.getProp(this.coordsKey, this.model)));
      };

      MarkerChildModel.prototype.setOptions = function(scope) {
        var coords, icon, _options;
        if (this.isNotValid(scope, false)) {
          return;
        }
        if (scope.coords == null) {
          return;
        }
        coords = this.getProp(this.coordsKey, this.model);
        icon = this.getProp(this.iconKey, this.model);
        _options = this.getProp(this.optionsKey, this.model);
        this.opts = this.createOptions(coords, icon, _options);
        if ((this.gMarker != null) && (this.isLabel(this.gMarker === this.isLabel(this.opts)))) {
          this.gMarker.setOptions(this.opts);
        } else {
          if (!this.firstTime) {
            if (this.gMarker != null) {
              this.gMarkerManager.remove(this.gMarker);
              this.gMarker = null;
            }
          }
        }
        if (!this.gMarker) {
          if (this.isLabel(this.opts)) {
            this.gMarker = new MarkerWithLabel(this.setLabelOptions(this.opts));
          } else {
            this.gMarker = new google.maps.Marker(this.opts);
          }
        }
        if (this.externalListeners) {
          this.removeEvents(this.externalListeners);
        }
        if (this.internalListeners) {
          this.removeEvents(this.internalListeners);
        }
        this.externalListeners = this.setEvents(this.gMarker, this.scope, this.model, ['dragend']);
        this.internalListeners = this.setEvents(this.gMarker, {
          events: this.internalEvents(),
          $evalAsync: function() {}
        }, this.model);
        if (this.id != null) {
          this.gMarker.key = this.id;
        }
        this.gMarkerManager.add(this.gMarker);
        if (this.gMarker && (this.gMarker.getMap() || this.gMarkerManager.type !== MarkerManager.type)) {
          this.deferred.resolve(this.gMarker);
        } else {
          if (!this.gMarker) {
            this.deferred.reject('gMarker is null');
          }
          if (!(this.gMarker.getMap() && this.gMarkerManager.type === MarkerManager.type)) {
            $log.warn('gMarker has no map yet');
            this.deferred.resolve(this.gMarker);
          }
        }
        if (this.model[this.fitKey]) {
          return this.gMarkerManager.fit();
        }
      };

      MarkerChildModel.prototype.setLabelOptions = function(opts) {
        opts.labelAnchor = this.getLabelPositionPoint(opts.labelAnchor);
        return opts;
      };

      MarkerChildModel.prototype.internalEvents = function() {
        return {
          dragend: (function(_this) {
            return function(marker, eventName, model, mousearg) {
              var events, modelToSet, newCoords;
              modelToSet = _this.trackModel ? _this.scope.model : _this.model;
              newCoords = _this.setCoordsFromEvent(_this.modelOrKey(modelToSet, _this.coordsKey), _this.gMarker.getPosition());
              modelToSet = _this.setVal(model, _this.coordsKey, newCoords);
              events = _this.scope.events;
              if ((events != null ? events.dragend : void 0) != null) {
                events.dragend(marker, eventName, modelToSet, mousearg);
              }
              return _this.scope.$apply();
            };
          })(this),
          click: (function(_this) {
            return function(marker, eventName, model, mousearg) {
              var click;
              click = _.isFunction(_this.clickKey) ? _this.clickKey : _this.getProp(_this.clickKey, _this.model);
              if (_this.doClick && (click != null)) {
                return _this.scope.$evalAsync(click(marker, eventName, _this.model, mousearg));
              }
            };
          })(this)
        };
      };

      return MarkerChildModel;

    })(ModelKey);
    return MarkerChildModel;
  }
]);
