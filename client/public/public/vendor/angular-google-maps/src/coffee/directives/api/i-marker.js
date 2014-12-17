
/*
	- interface for all markers to derrive from
 	- to enforce a minimum set of requirements
 		- attributes
 			- coords
 			- icon
		- implementation needed on watches
 */
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

angular.module("google-maps.directives.api".ns()).factory("IMarker".ns(), [
  "Logger".ns(), "BaseObject".ns(), "CtrlHandle".ns(), function(Logger, BaseObject, CtrlHandle) {
    var IMarker;
    return IMarker = (function(_super) {
      __extends(IMarker, _super);

      IMarker.scopeKeys = {
        coords: '=coords',
        icon: '=icon',
        click: '&click',
        options: '=options',
        events: '=events',
        fit: '=fit',
        idKey: '=idkey',
        control: '=control'
      };

      IMarker.keys = _.keys(IMarker.scopeKeys);

      IMarker.extend(CtrlHandle);

      function IMarker() {
        this.$log = Logger;
        this.restrict = 'EMA';
        this.require = '^' + 'GoogleMap'.ns();
        this.priority = -1;
        this.transclude = true;
        this.replace = true;
        this.scope = IMarker.scopeKeys;
      }

      return IMarker;

    })(BaseObject);
  }
]);
