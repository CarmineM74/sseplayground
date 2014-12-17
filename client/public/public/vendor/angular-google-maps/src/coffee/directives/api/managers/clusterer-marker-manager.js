var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

angular.module('uiGmapgoogle-maps.directives.api.managers').factory('uiGmapClustererMarkerManager', [
  'uiGmapLogger', 'uiGmapFitHelper', 'uiGmapPropMap', function($log, FitHelper, PropMap) {
    var ClustererMarkerManager;
    ClustererMarkerManager = (function(_super) {
      __extends(ClustererMarkerManager, _super);

      ClustererMarkerManager.type = 'ClustererMarkerManager';

      function ClustererMarkerManager(gMap, opt_markers, opt_options, opt_events) {
        var self;
        this.opt_events = opt_events;
        this.checkSync = __bind(this.checkSync, this);
        this.getGMarkers = __bind(this.getGMarkers, this);
        this.fit = __bind(this.fit, this);
        this.destroy = __bind(this.destroy, this);
        this.clear = __bind(this.clear, this);
        this.draw = __bind(this.draw, this);
        this.removeMany = __bind(this.removeMany, this);
        this.remove = __bind(this.remove, this);
        this.addMany = __bind(this.addMany, this);
        this.add = __bind(this.add, this);
        ClustererMarkerManager.__super__.constructor.call(this);
        this.type = ClustererMarkerManager.type;
        self = this;
        this.opt_options = opt_options;
        if ((opt_options != null) && opt_markers === void 0) {
          this.clusterer = new NgMapMarkerClusterer(gMap, void 0, opt_options);
        } else if ((opt_options != null) && (opt_markers != null)) {
          this.clusterer = new NgMapMarkerClusterer(gMap, opt_markers, opt_options);
        } else {
          this.clusterer = new NgMapMarkerClusterer(gMap);
        }
        this.propMapGMarkers = new PropMap();
        this.attachEvents(this.opt_events, 'opt_events');
        this.clusterer.setIgnoreHidden(true);
        this.noDrawOnSingleAddRemoves = true;
        $log.info(this);
      }

      ClustererMarkerManager.prototype.checkKey = function(gMarker) {
        var msg;
        if (gMarker.key == null) {
          msg = 'gMarker.key undefined and it is REQUIRED!!';
          return Logger.error(msg);
        }
      };

      ClustererMarkerManager.prototype.add = function(gMarker) {
        this.checkKey(gMarker);
        this.clusterer.addMarker(gMarker, this.noDrawOnSingleAddRemoves);
        this.propMapGMarkers.put(gMarker.key, gMarker);
        return this.checkSync();
      };

      ClustererMarkerManager.prototype.addMany = function(gMarkers) {
        return gMarkers.forEach((function(_this) {
          return function(gMarker) {
            return _this.add(gMarker);
          };
        })(this));
      };

      ClustererMarkerManager.prototype.remove = function(gMarker) {
        var exists;
        this.checkKey(gMarker);
        exists = this.propMapGMarkers.get(gMarker.key);
        if (exists) {
          this.clusterer.removeMarker(gMarker, this.noDrawOnSingleAddRemoves);
          this.propMapGMarkers.remove(gMarker.key);
        }
        return this.checkSync();
      };

      ClustererMarkerManager.prototype.removeMany = function(gMarkers) {
        return gMarkers.forEach((function(_this) {
          return function(gMarker) {
            return _this.remove(gMarker);
          };
        })(this));
      };

      ClustererMarkerManager.prototype.draw = function() {
        return this.clusterer.repaint();
      };

      ClustererMarkerManager.prototype.clear = function() {
        this.removeMany(this.getGMarkers());
        return this.clusterer.repaint();
      };

      ClustererMarkerManager.prototype.attachEvents = function(options, optionsName) {
        var eventHandler, eventName, _results;
        if (angular.isDefined(options) && (options != null) && angular.isObject(options)) {
          _results = [];
          for (eventName in options) {
            eventHandler = options[eventName];
            if (options.hasOwnProperty(eventName) && angular.isFunction(options[eventName])) {
              $log.info("" + optionsName + ": Attaching event: " + eventName + " to clusterer");
              _results.push(google.maps.event.addListener(this.clusterer, eventName, options[eventName]));
            } else {
              _results.push(void 0);
            }
          }
          return _results;
        }
      };

      ClustererMarkerManager.prototype.clearEvents = function(options) {
        var eventHandler, eventName, _results;
        if (angular.isDefined(options) && (options != null) && angular.isObject(options)) {
          _results = [];
          for (eventName in options) {
            eventHandler = options[eventName];
            if (options.hasOwnProperty(eventName) && angular.isFunction(options[eventName])) {
              $log.info("" + optionsName + ": Clearing event: " + eventName + " to clusterer");
              _results.push(google.maps.event.clearListeners(this.clusterer, eventName));
            } else {
              _results.push(void 0);
            }
          }
          return _results;
        }
      };

      ClustererMarkerManager.prototype.destroy = function() {
        this.clearEvents(this.opt_events);
        this.clearEvents(this.opt_internal_events);
        return this.clear();
      };

      ClustererMarkerManager.prototype.fit = function() {
        return ClustererMarkerManager.__super__.fit.call(this, this.getGMarkers(), this.clusterer.getMap());
      };

      ClustererMarkerManager.prototype.getGMarkers = function() {
        return this.clusterer.getMarkers().values();
      };

      ClustererMarkerManager.prototype.checkSync = function() {
        if (this.getGMarkers().length !== this.propMapGMarkers.length) {
          throw 'GMarkers out of Sync in MarkerClusterer';
        }
      };

      return ClustererMarkerManager;

    })(FitHelper);
    return ClustererMarkerManager;
  }
]);
