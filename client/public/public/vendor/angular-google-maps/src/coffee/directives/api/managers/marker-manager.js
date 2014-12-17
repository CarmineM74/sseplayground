var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

angular.module("uiGmapgoogle-maps.directives.api.managers").factory("uiGmapMarkerManager", [
  "uiGmapLogger", "uiGmapFitHelper", "uiGmapPropMap", function(Logger, FitHelper, PropMap) {
    var MarkerManager;
    MarkerManager = (function(_super) {
      __extends(MarkerManager, _super);

      MarkerManager.include(FitHelper);

      MarkerManager.type = 'MarkerManager';

      function MarkerManager(gMap, opt_markers, opt_options) {
        this.getGMarkers = __bind(this.getGMarkers, this);
        this.fit = __bind(this.fit, this);
        this.handleOptDraw = __bind(this.handleOptDraw, this);
        this.clear = __bind(this.clear, this);
        this.draw = __bind(this.draw, this);
        this.removeMany = __bind(this.removeMany, this);
        this.remove = __bind(this.remove, this);
        this.addMany = __bind(this.addMany, this);
        this.add = __bind(this.add, this);
        MarkerManager.__super__.constructor.call(this);
        this.type = MarkerManager.type;
        this.gMap = gMap;
        this.gMarkers = new PropMap();
        this.$log = Logger;
        this.$log.info(this);
      }

      MarkerManager.prototype.add = function(gMarker, optDraw) {
        var exists, msg;
        if (optDraw == null) {
          optDraw = true;
        }
        if (gMarker.key == null) {
          msg = "gMarker.key undefined and it is REQUIRED!!";
          Logger.error(msg);
          throw msg;
        }
        exists = (this.gMarkers.get(gMarker.key)) != null;
        if (!exists) {
          this.handleOptDraw(gMarker, optDraw, true);
          return this.gMarkers.put(gMarker.key, gMarker);
        }
      };

      MarkerManager.prototype.addMany = function(gMarkers) {
        return gMarkers.forEach((function(_this) {
          return function(gMarker) {
            return _this.add(gMarker);
          };
        })(this));
      };

      MarkerManager.prototype.remove = function(gMarker, optDraw) {
        if (optDraw == null) {
          optDraw = true;
        }
        this.handleOptDraw(gMarker, optDraw, false);
        if (this.gMarkers.get(gMarker.key)) {
          return this.gMarkers.remove(gMarker.key);
        }
      };

      MarkerManager.prototype.removeMany = function(gMarkers) {
        return this.gMarkers.values().forEach((function(_this) {
          return function(marker) {
            return _this.remove(marker);
          };
        })(this));
      };

      MarkerManager.prototype.draw = function() {
        var deletes;
        deletes = [];
        this.gMarkers.values().forEach((function(_this) {
          return function(gMarker) {
            if (!gMarker.isDrawn) {
              if (gMarker.doAdd) {
                gMarker.setMap(_this.gMap);
                return gMarker.isDrawn = true;
              } else {
                return deletes.push(gMarker);
              }
            }
          };
        })(this));
        return deletes.forEach((function(_this) {
          return function(gMarker) {
            gMarker.isDrawn = false;
            return _this.remove(gMarker, true);
          };
        })(this));
      };

      MarkerManager.prototype.clear = function() {
        this.gMarkers.values().forEach(function(gMarker) {
          return gMarker.setMap(null);
        });
        delete this.gMarkers;
        return this.gMarkers = new PropMap();
      };

      MarkerManager.prototype.handleOptDraw = function(gMarker, optDraw, doAdd) {
        if (optDraw === true) {
          if (doAdd) {
            gMarker.setMap(this.gMap);
          } else {
            gMarker.setMap(null);
          }
          return gMarker.isDrawn = true;
        } else {
          gMarker.isDrawn = false;
          return gMarker.doAdd = doAdd;
        }
      };

      MarkerManager.prototype.fit = function() {
        return MarkerManager.__super__.fit.call(this, this.getGMarkers(), this.gMap);
      };

      MarkerManager.prototype.getGMarkers = function() {
        return this.gMarkers.values();
      };

      return MarkerManager;

    })(FitHelper);
    return MarkerManager;
  }
]);
