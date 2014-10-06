(function() {
  'use strict';
  angular.module('sseAppApp.directives').directive('onScreenKeyboard', function() {
    return {
      restrict: 'A',
      require: '?ngModel',
      scope: {
        layout: '='
      },
      link: function(scope, element, attrs, ngModelController) {
        var layout;
        if (!ngModelController) {
          return;
        }
        console.log("[onScreenKeyboard] starting with layout " + attrs.layout + " ...");
        layout = 'qwerty';
        if (attrs.layout) {
          layout = attrs.layout;
        }
        return $(element).keyboard({
          autoAccept: true,
          stickyShift: true,
          usePreview: false,
          layout: layout
        });
      }
    };
  });

}).call(this);

//# sourceMappingURL=keyboard.js.map
