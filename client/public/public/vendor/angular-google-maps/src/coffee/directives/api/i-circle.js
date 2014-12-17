angular.module("uiGmapgoogle-maps.directives.api").service("uiGmapICircle", [
  function() {
    var DEFAULTS;
    DEFAULTS = {};
    return {
      restrict: "EA",
      replace: true,
      require: '^' + 'uiGmapGoogleMap',
      scope: {
        center: "=center",
        radius: "=radius",
        stroke: "=stroke",
        fill: "=fill",
        clickable: "=",
        draggable: "=",
        editable: "=",
        geodesic: "=",
        icons: "=icons",
        visible: "=",
        events: "="
      }
    };
  }
]);
