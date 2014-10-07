'use strict'

angular.module('sseAppApp.directives')
  .directive('onScreenKeyboard', ->
    {
      restrict: 'A'
      require: '?ngModel'
      scope: {
        layout: '='
      }
      link: (scope, element, attrs, ngModelController) ->
        return unless ngModelController
        console.log("[onScreenKeyboard] starting with layout " + attrs.layout + " ...")
        layout = 'qwerty'
        layout = attrs.layout if attrs.layout
        $(element).keyboard(
          {
            autoAccept: true
            stickyShift: true
            usePreview: false
            layout: layout
          }
        )
    }

  )

