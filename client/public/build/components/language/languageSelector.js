define(['app'], function(module){
    "use strict";

    module.directive('languageSelector', ["Language", function(Language){
        return {
            restrict: "EA",
            replace: true,
            templateUrl: "build/components/language/language-selector.tpl.html",
            scope: true,
        }
    }])
});
