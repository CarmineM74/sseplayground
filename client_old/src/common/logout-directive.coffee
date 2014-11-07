'use strict'
angular.module('saStudyApp.directives.logout',[
    'saStudyApp.services.authorization'
  ])
  .directive('logoutButton', (AuthorizationService) ->
    {
      restrict: 'E'
      replace: false
      template: '<span><a href="#" title="Sign Out">' +
                ' <i class="fa fa-sign-out"></i></a></span>'
      controllerAs: 'ctrl2'
      controller: ($scope, $element, $attrs) ->
        $scope.$on('auth:validation-success',
          -> console.log('Validation success'))
        $scope.$on('auth:validation-error', -> console.log('Validation ERROR'))
        logout: ->
          AuthorizationService.currentUser().then((user) ->
            angular.element.SmartMessageBox(
              {
                title: "<i class='fa fa-sign-out txt-color-orangeDark'></i> \
                        Logout <span class='txt-color-orangeDark'>\
                        <strong>" + user.email + "</strong></span> ?"
                content: $attrs.logoutMsg || "You can improve your security \
                                              further after logging out by \
                                              closing this opened browser"
                buttons: '[No][Yes]'
              },
              (ButtonPressed) =>
                if (ButtonPressed == "Yes")
                  setTimeout(AuthorizationService.logout(), 1000)
             )
            )
    }
  )

