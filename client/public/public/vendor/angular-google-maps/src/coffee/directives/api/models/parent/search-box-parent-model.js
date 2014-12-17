var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

angular.module("google-maps.directives.api.models.parent".ns()).factory("SearchBoxParentModel".ns(), [
  "BaseObject".ns(), "Logger".ns(), "EventsHelper".ns(), '$timeout', '$http', '$templateCache', function(BaseObject, Logger, EventsHelper, $timeout, $http, $templateCache) {
    var SearchBoxParentModel;
    SearchBoxParentModel = (function(_super) {
      __extends(SearchBoxParentModel, _super);

      SearchBoxParentModel.include(EventsHelper);

      function SearchBoxParentModel(scope, element, attrs, gMap, ctrlPosition, template, $log) {
        var controlDiv;
        this.scope = scope;
        this.element = element;
        this.attrs = attrs;
        this.gMap = gMap;
        this.ctrlPosition = ctrlPosition;
        this.template = template;
        this.$log = $log != null ? $log : Logger;
        this.getBounds = __bind(this.getBounds, this);
        this.setBounds = __bind(this.setBounds, this);
        this.createSearchBox = __bind(this.createSearchBox, this);
        this.addToParentDiv = __bind(this.addToParentDiv, this);
        this.addAsMapControl = __bind(this.addAsMapControl, this);
        this.init = __bind(this.init, this);
        if (this.attrs.template == null) {
          this.$log.error("template attribute for the search-box directive is mandatory. Places Search Box creation aborted!!");
          return;
        }
        controlDiv = angular.element('<div></div>');
        controlDiv.append(this.template);
        this.input = controlDiv.find('input')[0];
        this.init();
      }

      SearchBoxParentModel.prototype.init = function() {
        this.createSearchBox();
        if (this.attrs.parentdiv != null) {
          this.addToParentDiv();
        } else {
          this.addAsMapControl();
        }
        this.listener = google.maps.event.addListener(this.searchBox, 'places_changed', (function(_this) {
          return function() {
            return _this.places = _this.searchBox.getPlaces();
          };
        })(this));
        this.listeners = this.setEvents(this.searchBox, this.scope, this.scope);
        this.$log.info(this);
        this.scope.$watch("options", (function(_this) {
          return function(newValue, oldValue) {
            if (angular.isObject(newValue)) {
              if (newValue.bounds != null) {
                return _this.setBounds(newValue.bounds);
              }
            }
          };
        })(this), true);
        return this.scope.$on("$destroy", (function(_this) {
          return function() {
            return _this.searchBox = null;
          };
        })(this));
      };

      SearchBoxParentModel.prototype.addAsMapControl = function() {
        return this.gMap.controls[google.maps.ControlPosition[this.ctrlPosition]].push(this.input);
      };

      SearchBoxParentModel.prototype.addToParentDiv = function() {
        this.parentDiv = angular.element(document.getElementById(this.scope.parentdiv));
        return this.parentDiv.append(this.input);
      };

      SearchBoxParentModel.prototype.createSearchBox = function() {
        return this.searchBox = new google.maps.places.SearchBox(this.input, this.scope.options);
      };

      SearchBoxParentModel.prototype.setBounds = function(bounds) {
        if (angular.isUndefined(bounds.isEmpty)) {
          this.$log.error("Error: SearchBoxParentModel setBounds. Bounds not an instance of LatLngBounds.");
        } else {
          if (bounds.isEmpty() === false) {
            if (this.searchBox != null) {
              return this.searchBox.setBounds(bounds);
            }
          }
        }
      };

      SearchBoxParentModel.prototype.getBounds = function() {
        return this.searchBox.getBounds();
      };

      return SearchBoxParentModel;

    })(BaseObject);
    return SearchBoxParentModel;
  }
]);
