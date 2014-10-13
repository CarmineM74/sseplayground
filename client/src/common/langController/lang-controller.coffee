'use strict'
angular
  .module('saStudyApp.controllers.language',[
    'app.localize'
  ])
  .controller 'LanguageController',
    class LanguageController
      constructor: (@$scope, @settings, @localize) ->
        console.log('[LanguageController] Initializing ...')
        #console.log(JSON.stringify(@settings.languages))
        @$scope.languages = @settings.languages
        @$scope.currentLang = @settings.currentLang
        @$scope.setLang = @setLang
        # set the default language
        @setLang(@$scope.currentLang)

      setLang: (lang) =>
        @settings.currentLang = lang
        @$scope.currentLang = lang
        @localize.setLang(lang)

