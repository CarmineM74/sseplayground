angular.module("uiGmapgoogle-maps.directives.api.utils").factory("uiGmapChromeFixes", [
  function() {
    return {
      maybeRepaint: function(el) {
        var od;
        if (el) {
          od = el.style.display;
          el.style.display = 'none';
          return _.defer(function() {
            return el.style.display = od;
          });
        }
      }
    };
  }
]);
