var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

angular.module("uiGmapgoogle-maps.directives.api.models.parent").factory("uiGmapMarkersParentModel", [
  "uiGmapIMarkerParentModel", "uiGmapModelsWatcher", "uiGmapPropMap", "uiGmapMarkerChildModel", "uiGmap_async", "uiGmapClustererMarkerManager", "uiGmapMarkerManager", "$timeout", "uiGmapIMarker", "uiGmapPromise", "uiGmapGmapUtil", function(IMarkerParentModel, ModelsWatcher, PropMap, MarkerChildModel, _async, ClustererMarkerManager, MarkerManager, $timeout, IMarker, uiGmapPromise, GmapUtil) {
    var MarkersParentModel;
    MarkersParentModel = (function(_super) {
      __extends(MarkersParentModel, _super);

      MarkersParentModel.include(GmapUtil);

      MarkersParentModel.include(ModelsWatcher);

      function MarkersParentModel(scope, element, attrs, map) {
        this.onDestroy = __bind(this.onDestroy, this);
        this.newChildMarker = __bind(this.newChildMarker, this);
        this.updateChild = __bind(this.updateChild, this);
        this.pieceMeal = __bind(this.pieceMeal, this);
        this.reBuildMarkers = __bind(this.reBuildMarkers, this);
        this.createMarkersFromScratch = __bind(this.createMarkersFromScratch, this);
        this.validateScope = __bind(this.validateScope, this);
        this.onWatch = __bind(this.onWatch, this);
        var self;
        MarkersParentModel.__super__.constructor.call(this, scope, element, attrs, map);
        self = this;
        this.scope.markerModels = new PropMap();
        this.$log.info(this);
        this.doRebuildAll = this.scope.doRebuildAll != null ? this.scope.doRebuildAll : false;
        this.setIdKey(scope);
        this.scope.$watch('doRebuildAll', (function(_this) {
          return function(newValue, oldValue) {
            if (newValue !== oldValue) {
              return _this.doRebuildAll = newValue;
            }
          };
        })(this));
        if ((scope.models == null) || scope.models.length === 0) {
          this.modelsRendered = false;
        }
        this.scope.$watch('models', (function(_this) {
          return function(newValue, oldValue) {
            if (!_.isEqual(newValue, oldValue) || !_this.modelsRendered) {
              _this.modelsRendered = true;
              return _this.onWatch('models', scope, newValue, oldValue);
            }
          };
        })(this), !this.isTrue(attrs.modelsbyref));
        this.watch('doCluster', scope);
        this.watch('clusterOptions', scope);
        this.watch('clusterEvents', scope);
        this.watch('fit', scope);
        this.watch('idKey', scope);
        this.gMarkerManager = void 0;
        this.createMarkersFromScratch(scope);
      }

      MarkersParentModel.prototype.onWatch = function(propNameToWatch, scope, newValue, oldValue) {
        if (propNameToWatch === "idKey" && newValue !== oldValue) {
          this.idKey = newValue;
        }
        if (this.doRebuildAll) {
          return this.reBuildMarkers(scope);
        } else {
          return this.pieceMeal(scope);
        }
      };

      MarkersParentModel.prototype.validateScope = function(scope) {
        var modelsNotDefined;
        modelsNotDefined = angular.isUndefined(scope.models) || scope.models === void 0;
        if (modelsNotDefined) {
          this.$log.error(this.constructor.name + ": no valid models attribute found");
        }
        return MarkersParentModel.__super__.validateScope.call(this, scope) || modelsNotDefined;
      };

      MarkersParentModel.prototype.createMarkersFromScratch = function(scope) {
        if (scope.doCluster) {
          if (scope.clusterEvents) {
            this.clusterInternalOptions = _.once((function(_this) {
              return function() {
                var self, _ref, _ref1, _ref2;
                self = _this;
                if (!_this.origClusterEvents) {
                  _this.origClusterEvents = {
                    click: (_ref = scope.clusterEvents) != null ? _ref.click : void 0,
                    mouseout: (_ref1 = scope.clusterEvents) != null ? _ref1.mouseout : void 0,
                    mouseover: (_ref2 = scope.clusterEvents) != null ? _ref2.mouseover : void 0
                  };
                  return _.extend(scope.clusterEvents, {
                    click: function(cluster) {
                      return self.maybeExecMappedEvent(cluster, 'click');
                    },
                    mouseout: function(cluster) {
                      return self.maybeExecMappedEvent(cluster, 'mouseout');
                    },
                    mouseover: function(cluster) {
                      return self.maybeExecMappedEvent(cluster, 'mouseover');
                    }
                  });
                }
              };
            })(this))();
          }
          if (scope.clusterOptions || scope.clusterEvents) {
            if (this.gMarkerManager === void 0) {
              this.gMarkerManager = new ClustererMarkerManager(this.map, void 0, scope.clusterOptions, this.clusterInternalOptions);
            } else {
              if (this.gMarkerManager.opt_options !== scope.clusterOptions) {
                this.gMarkerManager = new ClustererMarkerManager(this.map, void 0, scope.clusterOptions, this.clusterInternalOptions);
              }
            }
          } else {
            this.gMarkerManager = new ClustererMarkerManager(this.map);
          }
        } else {
          this.gMarkerManager = new MarkerManager(this.map);
        }
        return _async.waitOrGo(this, (function(_this) {
          return function() {
            return _async.each(scope.models, function(model) {
              return _this.newChildMarker(model, scope);
            }, false).then(function() {
              _this.gMarkerManager.draw();
              if (scope.fit) {
                return _this.gMarkerManager.fit();
              }
            });
          };
        })(this)).then((function(_this) {
          return function() {
            return _this.existingPieces = void 0;
          };
        })(this));
      };

      MarkersParentModel.prototype.reBuildMarkers = function(scope) {
        var _ref;
        if (!scope.doRebuild && scope.doRebuild !== void 0) {
          return;
        }
        if ((_ref = this.scope.markerModels) != null ? _ref.length : void 0) {
          this.onDestroy(scope);
        }
        return this.createMarkersFromScratch(scope);
      };

      MarkersParentModel.prototype.pieceMeal = function(scope) {
        var doChunk;
        doChunk = this.existingPieces != null ? false : _async.defaultChunkSize;
        if ((this.scope.models != null) && this.scope.models.length > 0 && this.scope.markerModels.length > 0) {
          return this.figureOutState(this.idKey, scope, this.scope.markerModels, this.modelKeyComparison, (function(_this) {
            return function(state) {
              var payload;
              payload = state;
              return _async.waitOrGo(_this, function() {
                return _async.each(payload.removals, function(child) {
                  if (child != null) {
                    if (child.destroy != null) {
                      child.destroy();
                    }
                    return _this.scope.markerModels.remove(child.id);
                  }
                }, doChunk).then(function() {
                  return _async.each(payload.adds, function(modelToAdd) {
                    return _this.newChildMarker(modelToAdd, scope);
                  }, doChunk);
                }).then(function() {
                  return _async.each(payload.updates, function(update) {
                    return _this.updateChild(update.child, update.model);
                  }, doChunk);
                }).then(function() {
                  if (payload.adds.length > 0 || payload.removals.length > 0 || payload.updates.length > 0) {
                    _this.gMarkerManager.draw();
                    scope.markerModels = _this.scope.markerModels;
                    if (scope.fit) {
                      return _this.gMarkerManager.fit();
                    }
                  }
                });
              }).then(function() {
                return _this.existingPieces = void 0;
              });
            };
          })(this));
        } else {
          return this.reBuildMarkers(scope);
        }
      };

      MarkersParentModel.prototype.updateChild = function(child, model) {
        if (model[this.idKey] == null) {
          this.$log.error("Marker model has no id to assign a child to. This is required for performance. Please assign id, or redirect id to a different key.");
          return;
        }
        return child.setMyScope(model, child.model, false);
      };

      MarkersParentModel.prototype.newChildMarker = function(model, scope) {
        var child, childScope, doDrawSelf, keys;
        if (model[this.idKey] == null) {
          this.$log.error("Marker model has no id to assign a child to. This is required for performance. Please assign id, or redirect id to a different key.");
          return;
        }
        this.$log.info('child', child, 'markers', this.scope.markerModels);
        childScope = scope.$new(true);
        childScope.events = scope.events;
        keys = {};
        _.each(IMarker.scopeKeys, function(v, k) {
          return keys[k] = scope[k];
        });
        child = new MarkerChildModel(childScope, model, keys, this.map, this.DEFAULTS, this.doClick, this.gMarkerManager, doDrawSelf = false);
        this.scope.markerModels.put(model[this.idKey], child);
        return child;
      };

      MarkersParentModel.prototype.onDestroy = function(scope) {
        return _async.waitOrGo(this, (function(_this) {
          return function() {
            _.each(_this.scope.markerModels.values(), function(model) {
              if (model != null) {
                return model.destroy(false);
              }
            });
            delete _this.scope.markerModels;
            if (_this.gMarkerManager != null) {
              _this.gMarkerManager.clear();
            }
            _this.scope.markerModels = new PropMap();
            return uiGmapPromise.resolve();
          };
        })(this));
      };

      MarkersParentModel.prototype.maybeExecMappedEvent = function(cluster, fnName) {
        var pair, _ref;
        if (_.isFunction((_ref = this.scope.clusterEvents) != null ? _ref[fnName] : void 0)) {
          pair = this.mapClusterToMarkerModels(cluster);
          if (this.origClusterEvents[fnName]) {
            return this.origClusterEvents[fnName](pair.cluster, pair.mapped);
          }
        }
      };

      MarkersParentModel.prototype.mapClusterToMarkerModels = function(cluster) {
        var gMarkers, mapped;
        gMarkers = cluster.getMarkers().values();
        mapped = gMarkers.map((function(_this) {
          return function(g) {
            return _this.scope.markerModels[g.key].model;
          };
        })(this));
        return {
          cluster: cluster,
          mapped: mapped
        };
      };

      return MarkersParentModel;

    })(IMarkerParentModel);
    return MarkersParentModel;
  }
]);
