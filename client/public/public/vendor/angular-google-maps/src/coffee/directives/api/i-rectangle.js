angular.module('uiGmapgoogle-maps.directives.api').service('uiGmapIRectangle', [
  function() {
    'use strict';
    var DEFAULTS;
    DEFAULTS = {};
    return {
      restrict: 'EMA',
      require: '^' + 'uiGmapGoogleMap',
      replace: true,
      scope: {
        bounds: '=',
        stroke: '=',
        clickable: '=',
        draggable: '=',
        editable: '=',
        fill: '=',
        visible: '=',
        events: '='
      }
    };
  }
]);
