'use strict'

angular.module('sseAppApp.directives')
  .directive('onScreenKeyboard', ->
    {
      restrict: 'A'
      require: '?ngModel'
      link: (scope, element, attrs, ngModelController) ->
        return unless ngModelController
        console.log("[onScreenKeyboard] starting ...")
        $(element).keyboard(
          {
            autoAccept: true
            stickyShift: true
            usePreview: false
          }
        )
    }

  )

