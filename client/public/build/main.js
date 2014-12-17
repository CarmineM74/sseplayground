



var appConfig = {};

appConfig.menu_speed = 200;


appConfig.smartSkin = "smart-style-0";

appConfig.skins = [
    {name: "smart-style-0",
        logo: "styles/img/logo.png",
        class: "btn btn-block btn-xs txt-color-white margin-right-5",
        style: "background-color:#4E463F;",
        label: "Smart Default"},

    {name: "smart-style-1",
        logo: "styles/img/logo-white.png",
        class: "btn btn-block btn-xs txt-color-white",
        style: "background:#3A4558;",
        label: "Dark Elegance"},

    {name: "smart-style-2",
        logo: "styles/img/logo-blue.png",
        class: "btn btn-xs btn-block txt-color-darken margin-top-5",
        style: "background:#fff;",
        label: "Ultra Light"},

    {name: "smart-style-3",
        logo: "styles/img/logo-pale.png",
        class: "btn btn-xs btn-block txt-color-white margin-top-5",
        style: "background:#f78c40",
        label: "Google Skin"},

    {name: "smart-style-4",
        logo: "styles/img/logo-pale.png",
        class: "btn btn-xs btn-block txt-color-white margin-top-5",
        style: "background: #bbc0cf; border: 1px solid #59779E; color: #17273D !important;",
        label: "PixelSmash"},

    {name: "smart-style-5",
        logo: "styles/img/logo-pale.png",
        class: "btn btn-xs btn-block txt-color-white margin-top-5",
        style: "background: rgba(153, 179, 204, 0.2); border: 1px solid rgba(121, 161, 221, 0.8); color: #17273D !important;",
        label: "Glass"}
];



appConfig.sound_path = "sound/";
appConfig.sound_on = true; 


/*
* DEBUGGING MODE
* debugState = true; will spit all debuging message inside browser console.
* The colors are best displayed in chrome browser.
*/


appConfig.debugState = false;	
appConfig.debugStyle = 'font-weight: bold; color: #00f;';
appConfig.debugStyle_green = 'font-weight: bold; font-style:italic; color: #46C246;';
appConfig.debugStyle_red = 'font-weight: bold; color: #ed1c24;';
appConfig.debugStyle_warning = 'background-color:yellow';
appConfig.debugStyle_success = 'background-color:green; font-weight:bold; color:#fff;';
appConfig.debugStyle_error = 'background-color:#ed1c24; font-weight:bold; color:#fff;';


appConfig.voice_command = false;
appConfig.voice_command_auto = false;

/*
 *  Sets the language to the default 'en-US'. (supports over 50 languages 
 *  by google)
 * 
 *  Afrikaans         ['af-ZA']
 *  Bahasa Indonesia  ['id-ID']
 *  Bahasa Melayu     ['ms-MY']
 *  CatalГ            ['ca-ES']
 *  ДЊeЕЎtina         ['cs-CZ']
 *  Deutsch           ['de-DE']
 *  English           ['en-AU', 'Australia']
 *                    ['en-CA', 'Canada']
 *                    ['en-IN', 'India']
 *                    ['en-NZ', 'New Zealand']
 *                    ['en-ZA', 'South Africa']
 *                    ['en-GB', 'United Kingdom']
 *                    ['en-US', 'United States']
 *  EspaГ±ol          ['es-AR', 'Argentina']
 *                    ['es-BO', 'Bolivia']
 *                    ['es-CL', 'Chile']
 *                    ['es-CO', 'Colombia']
 *                    ['es-CR', 'Costa Rica']
 *                    ['es-EC', 'Ecuador']
 *                    ['es-SV', 'El Salvador']
 *                    ['es-ES', 'EspaГ±a']
 *                    ['es-US', 'Estados Unidos']
 *                    ['es-GT', 'Guatemala']
 *                    ['es-HN', 'Honduras']
 *                    ['es-MX', 'MГ©xico']
 *                    ['es-NI', 'Nicaragua']
 *                    ['es-PA', 'PanamГЎ']
 *                    ['es-PY', 'Paraguay']
 *                    ['es-PE', 'PerГє']
 *                    ['es-PR', 'Puerto Rico']
 *                    ['es-DO', 'RepГєblica Dominicana']
 *                    ['es-UY', 'Uruguay']
 *                    ['es-VE', 'Venezuela']
 *  Euskara           ['eu-ES']
 *  FranГ§ais         ['fr-FR']
 *  Galego            ['gl-ES']
 *  Hrvatski          ['hr_HR']
 *  IsiZulu           ['zu-ZA']
 *  ГЌslenska         ['is-IS']
 *  Italiano          ['it-IT', 'Italia']
 *                    ['it-CH', 'Svizzera']
 *  Magyar            ['hu-HU']
 *  Nederlands        ['nl-NL']
 *  Norsk bokmГҐl     ['nb-NO']
 *  Polski            ['pl-PL']
 *  PortuguГЄs        ['pt-BR', 'Brasil']
 *                    ['pt-PT', 'Portugal']
 *  RomГўnДѓ          ['ro-RO']
 *  SlovenДЌina       ['sk-SK']
 *  Suomi             ['fi-FI']
 *  Svenska           ['sv-SE']
 *  TГјrkГ§e          ['tr-TR']
 *  Р±СЉР»РіР°СЂСЃРєРё['bg-BG']
 *  PСѓСЃСЃРєРёР№     ['ru-RU']
 *  РЎСЂРїСЃРєРё      ['sr-RS']
 *  н•њкµ­м–ґ         ['ko-KR']
 *  дё­ж–‡            ['cmn-Hans-CN', 'ж™®йЂљиЇќ (дё­е›Ѕе¤§й™†)']
 *                    ['cmn-Hans-HK', 'ж™®йЂљиЇќ (й¦™жёЇ)']
 *                    ['cmn-Hant-TW', 'дё­ж–‡ (еЏ°зЃЈ)']
 *                    ['yue-Hant-HK', 'зІµиЄћ (й¦™жёЇ)']
 *  ж—Ґжњ¬иЄћ         ['ja-JP']
 *  Lingua latД«na    ['la']
 */
appConfig.voice_command_lang = 'en-US';
/*
 *  Use localstorage to remember on/off (best used with HTML Version)
 */ 
appConfig.voice_localStorage = false;
/*
 * Voice Commands
 * Defines all voice command variables and functions
 */ 
if (appConfig.voice_command) {
        
     	appConfig.commands = {
                
        'show dashboard' : function() { window.location.hash = "dashboard" },
        'show inbox' : function() {  window.location.hash = "inbox/" },
        'show graphs' : function() {  window.location.hash = "graphs/flot" },
        'show flotchart' : function() { window.location.hash = "graphs/flot" },
        'show morris chart' : function() { window.location.hash = "graphs/morris" },
        'show inline chart' : function() { window.location.hash = "graphs/inline-charts" },
        'show dygraphs' : function() { window.location.hash = "graphs/dygraphs" },
        'show tables' : function() { window.location.hash = "tables/table" },
        'show data table' : function() { window.location.hash = "tables/datatable" },
        'show jquery grid' : function() { window.location.hash = "tables/jqgrid" },
        'show form' : function() { window.location.hash = "forms/form-elements" },
        'show form layouts' : function() { window.location.hash = "forms/form-templates" },
        'show form validation' : function() { window.location.hash = "forms/validation" },
        'show form elements' : function() { window.location.hash = "forms/bootstrap-forms" },
        'show form plugins' : function() { window.location.hash = "forms/plugins" },
        'show form wizards' : function() { window.location.hash = "forms/wizards" },
        'show bootstrap editor' : function() { window.location.hash = "forms/other-editors" },
        'show dropzone' : function() { window.location.hash = "forms/dropzone" },
        'show image cropping' : function() { window.location.hash = "forms/image-editor" },
        'show general elements' : function() { window.location.hash = "ui/general-elements" },
        'show buttons' : function() { window.location.hash = "ui/buttons" },
        'show fontawesome' : function() { window.location.hash = "ui/icons/fa" },
        'show glyph icons' : function() { window.location.hash = "ui/icons/glyph" },
        'show flags' : function() { window.location.hash = "ui/icons/flags" },
        'show grid' : function() { window.location.hash = "ui/grid" },
        'show tree view' : function() { window.location.hash = "ui/treeview" },
        'show nestable lists' : function() { window.location.hash = "ui/nestable-list" },
        'show jquery U I' : function() { window.location.hash = "ui/jqui" },
        'show typography' : function() { window.location.hash = "ui/typography" },
        'show calendar' : function() { window.location.hash = "calendar" },
        'show widgets' : function() { window.location.hash = "widgets" },
        'show gallery' : function() { window.location.hash = "gallery" },
        'show maps' : function() { window.location.hash = "gmap-xml" },
        'go back' :  function() { history.back(1); }, 
        'scroll up' : function () { $('html, body').animate({ scrollTop: 0 }, 100); },
        'scroll down' : function () { $('html, body').animate({ scrollTop: $(document).height() }, 100);},
        'hide navigation' : function() { 
            if ($( ":root" ).hasClass("container") && !$( ":root" ).hasClass("menu-on-top")){
                $('span.minifyme').trigger("click");
            } else {
                $('#hide-menu > span > a').trigger("click"); 
            }
        },
        'show navigation' : function() { 
            if ($( ":root" ).hasClass("container") && !$( ":root" ).hasClass("menu-on-top")){
                $('span.minifyme').trigger("click");
            } else {
                $('#hide-menu > span > a').trigger("click"); 
            }
        },
        'mute' : function() {
            appConfig.sound_on = false;
            $.smallBox({
                title : "MUTE",
                content : "All sounds have been muted!",
                color : "#a90329",
                timeout: 4000,
                icon : "fa fa-volume-off"
            });
        },
        'sound on' : function() {
            appConfig.sound_on = true;
            $.speechApp.playConfirmation();
            $.smallBox({
                title : "UNMUTE",
                content : "All sounds have been turned on!",
                color : "#40ac2b",
                sound_file: 'voice_alert',
                timeout: 5000,
                icon : "fa fa-volume-up"
            });
        },
        'stop' : function() {
            smartSpeechRecognition.abort();
            $( ":root" ).removeClass("voice-command-active");
            $.smallBox({
                title : "VOICE COMMAND OFF",
                content : "Your voice commands has been successfully turned off. Click on the <i class='fa fa-microphone fa-lg fa-fw'></i> icon to turn it back on.",
                color : "#40ac2b",
                sound_file: 'voice_off',
                timeout: 8000,
                icon : "fa fa-microphone-slash"
            });
            if ($('#speech-btn .popover').is(':visible')) {
                $('#speech-btn .popover').fadeOut(250);
            }
        },
        'help' : function() {

            $('#voiceModal').removeData('modal').modal( { remote: "app/layout/partials/voice-commands.tpl.html", show: true } );
            if ($('#speech-btn .popover').is(':visible')) {
                $('#speech-btn .popover').fadeOut(250);
            }

        },      
        'got it' : function() {
            $('#voiceModal').modal('hide');
        },  
        'logout' : function() {
            $.speechApp.stop();
            window.location = $('#logout > span > a').attr("href");
        }
    }; 
    
};


/*
* END APP.appConfig
*/
;
define("appConfig", function(){});



/**
 * @ngdoc overview
 * @name app [smartadminApp]
 * @description
 * # app [smartadminApp]
 *
 * Main module of the application.
 */

define('app',[
    'angular',
    'angular-couch-potato',
    'angular-ui-router',
    'angular-animate',
    'angular-bootstrap',
    'angular-sanitize',
    'notification'
], function (ng, couchPotato) {

    var app = ng.module('app', [
        'ngSanitize',

        'scs.couch-potato',
        'ngAnimate',
        'ui.router',
        'ui.bootstrap',
        // App
        'app.auth',
        'app.layout',
        'app.dashboard'
    ,"smart-templates"]);

    couchPotato.configureApp(app);

    app.config(["$provide", "$httpProvider", function ($provide, $httpProvider) {



        // Intercept http calls.
        $provide.factory('ErrorHttpInterceptor', ["$q", function ($q) {
            var errorCounter = 0;
            function notifyError(rejection){
                console.log(rejection);
                $.bigBox({
                    title: rejection.status + ' ' + rejection.statusText,
                    content: rejection.data,
                    color: "#C46A69",
                    icon: "fa fa-warning shake animated",
                    number: ++errorCounter,
                    timeout: 6000
                });
            }

            return {
                // On request failure
                requestError: function (rejection) {
                    // show notification
                    notifyError(rejection);

                    // Return the promise rejection.
                    return $q.reject(rejection);
                },

                // On response failure
                responseError: function (rejection) {
                    // show notification
                    notifyError(rejection);
                    // Return the promise rejection.
                    return $q.reject(rejection);
                }
            };
        }]);

        // Add the interceptor to the $httpProvider.
        $httpProvider.interceptors.push('ErrorHttpInterceptor');

    }]);

    app.run(["$couchPotato", "$rootScope", "$state", "$stateParams", function ($couchPotato, $rootScope, $state, $stateParams) {
        app.lazy = $couchPotato;
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        // editableOptions.theme = 'bs3';
    }]);

    return app;
});

define('auth/module',[
    'angular',
    'angular-couch-potato',
    'angular-ui-router',
    'angular-google-plus',
    'angular-easyfb'
], function (ng, couchPotato) {

    

    var module = ng.module('app.auth', [
        'ui.router'
//        ,
//        'ezfb',
//        'googleplus'
    ]);

    couchPotato.configureApp(module);

    var authKeys = {
        googleClientId: '678402726462-ah1p6ug0klf9jm8cplefmphfupg3bg2h.apps.googleusercontent.com',
        facebookAppId: '620275558085318'
    };

    module.config(["$stateProvider", "$couchPotatoProvider", function ($stateProvider, $couchPotatoProvider
//        , ezfbProvider
//        , GooglePlusProvider
        ) {
//        GooglePlusProvider.init({
//            clientId: authKeys.googleClientId
//        });
//
//        ezfbProvider.setInitParams({
//            appId: authKeys.facebookAppId
//        });
        $stateProvider.state('realLogin', {
            url: '/real-login',

            views: {
                root: {
                    templateUrl: "build/auth/login/login.html",
                    controller: 'LoginCtrl',
                    resolve: {
                        deps: $couchPotatoProvider.resolveDependencies([
                            'auth/models/User',
                            'auth/directives/loginInfo',

                            'auth/login/LoginCtrl',
                            'auth/login/directives/facebookSignin',
                            'auth/login/directives/googleSignin'
                        ])
                    }
                }
            },
            data: {
                title: 'Login',
                rootId: 'extra-page'
            }

        })

        .state('login', {
            url: '/login',
            views: {
                root: {
                    templateUrl: 'build/auth/views/login.html'
                }
            },
            data: {
                title: 'Login',
                htmlId: 'extr-page'
            },
            resolve: {
                deps: $couchPotatoProvider.resolveDependencies([
                    'modules/forms/directives/validate/smartValidateForm'
                ])
            }
        })

        .state('register', {
            url: '/register',
            views: {
                root: {
                    templateUrl: 'build/auth/views/register.html'
                }
            },
            data: {
                title: 'Register',
                htmlId: 'extr-page'
            },
            resolve: {
                deps: $couchPotatoProvider.resolveDependencies([
                    'modules/forms/directives/validate/smartValidateForm'
                ])
            }
        })

        .state('forgotPassword', {
            url: '/forgot-password',
            views: {
                root: {
                    templateUrl: 'build/auth/views/forgot-password.html'
                }
            },
            data: {
                title: 'Forgot Password',
                htmlId: 'extr-page'
            },
            resolve: {
                deps: $couchPotatoProvider.resolveDependencies([
                    'modules/forms/directives/validate/smartValidateForm'
                ])
            }
        })

        .state('lock', {
            url: '/lock',
            views: {
                root: {
                    templateUrl: 'build/auth/views/lock.html'
                }
            },
            data: {
                title: 'Locked Screen',
                htmlId: 'lock-page'
            }
        })


    }]).constant('authKeys', authKeys);

    module.run(["$couchPotato", function($couchPotato){
        module.lazy = $couchPotato;
    }]);
    return module;
});
define('auth/models/User',['auth/module'], function (module) {

    

   return module.registerFactory('User', ["$http", "$q", function ($http, $q) {
        var dfd = $q.defer();

        var UserModel = {
            initialized: dfd.promise,
            username: undefined,
            picture: undefined
        };
         $http.get('api/user.json').then(function(response){
             UserModel.username = response.data.username;
             UserModel.picture= response.data.picture;
             dfd.resolve(UserModel)
         });

        return UserModel;
    }]);

});

define('layout/module',['angular',
    'angular-couch-potato',
    'angular-ui-router'], function (ng, couchPotato) {

    


    var module = ng.module('app.layout', ['ui.router']);


    couchPotato.configureApp(module);

    module.config(["$stateProvider", "$couchPotatoProvider", "$urlRouterProvider", function ($stateProvider, $couchPotatoProvider, $urlRouterProvider) {


        $stateProvider
            .state('app', {
                abstract: true,
                views: {
                    root: {
                        templateUrl: 'build/layout/layout.tpl.html',
                        resolve: {
                            deps: $couchPotatoProvider.resolveDependencies([
                                'auth/directives/loginInfo'
                            ])
                        }
                    }
                }
            });
        $urlRouterProvider.otherwise('/dashboard');

    }]);

    module.run(["$couchPotato", function ($couchPotato) {
        module.lazy = $couchPotato;
    }]);

    return module;

});

define('layout/actions/minifyMenu',['layout/module'], function (module) {
    

    module.registerDirective('minifyMenu', function(){
        return {
            restrict: 'A',
            link: function(scope, element){
                    var $body = $('body');
                var minifyMenu = function() {
                    if (!$body.hasClass("menu-on-top")) {
                        $body.toggleClass("minified");
                        $body.removeClass("hidden-menu");
                        $('html').removeClass("hidden-menu-mobile-lock");
                    }
                };

                element.on('click', minifyMenu);
            }
        }
    })

});

define('layout/actions/toggleMenu',['layout/module'], function (module) {
    

    module.registerDirective('toggleMenu', function(){
        return {
            restrict: 'A',
            link: function(scope, element){
                var $body = $('body');

                var toggleMenu = function(){
                    if (!$body.hasClass("menu-on-top")){
                        $('html').toggleClass("hidden-menu-mobile-lock");
                        $body.toggleClass("hidden-menu");
                        $body.removeClass("minified");
                    } else if ( $body.hasClass("menu-on-top") && $body.hasClass("mobile-view-activated") ) {
                        $('html').toggleClass("hidden-menu-mobile-lock");
                        $body.toggleClass("hidden-menu");
                        $body.removeClass("minified");
                    }
                };

                element.on('click', toggleMenu);

                scope.$on('requestToggleMenu', function(){
                    toggleMenu();
                });
            }
        }
    })

});

define('layout/actions/fullScreen',['layout/module'], function (module) {

    

    module.registerDirective('fullScreen', function(){
        return {
            restrict: 'A',
            link: function(scope, element){
                var $body = $('body');
                var toggleFullSceen = function(e){
                    if (!$body.hasClass("full-screen")) {
                        $body.addClass("full-screen");
                        if (document.documentElement.requestFullscreen) {
                            document.documentElement.requestFullscreen();
                        } else if (document.documentElement.mozRequestFullScreen) {
                            document.documentElement.mozRequestFullScreen();
                        } else if (document.documentElement.webkitRequestFullscreen) {
                            document.documentElement.webkitRequestFullscreen();
                        } else if (document.documentElement.msRequestFullscreen) {
                            document.documentElement.msRequestFullscreen();
                        }
                    } else {
                        $body.removeClass("full-screen");
                        if (document.exitFullscreen) {
                            document.exitFullscreen();
                        } else if (document.mozCancelFullScreen) {
                            document.mozCancelFullScreen();
                        } else if (document.webkitExitFullscreen) {
                            document.webkitExitFullscreen();
                        }
                    }
                };

                element.on('click', toggleFullSceen);

            }
        }
    })
});

define('layout/actions/resetWidgets',['layout/module'], function (module) {

    

    module.registerDirective('resetWidgets', ["$state", function($state){

        return {
            restrict: 'A',
            link: function(scope, element){
                element.on('click', function(){
                    $.SmartMessageBox({
                        title : "<i class='fa fa-refresh' style='color:green'></i> Clear Local Storage",
                        content : "Would you like to RESET all your saved widgets and clear LocalStorage?1",
                        buttons : '[No][Yes]'
                    }, function(ButtonPressed) {
                        if (ButtonPressed == "Yes" && localStorage) {
                            localStorage.clear();
                            location.reload()
                        }
                    });

                });
            }
        }

    }])

});

define('layout/actions/searchMobile',['layout/module'], function (module) {

    

    module.registerDirective('searchMobile', function () {
        return {
            restrict: 'A',
            compile: function (element, attributes) {
                element.removeAttr('search-mobile data-search-mobile');

                element.on('click', function (e) {
                    $('body').addClass('search-mobile');
                    e.preventDefault();
                });

                $('#cancel-search-js').on('click', function (e) {
                    $('body').removeClass('search-mobile');
                    e.preventDefault();
                });
            }
        }
    });
});

define('layout/directives/smartInclude',['layout/module'], function(module){

    

    return module.registerDirective('smartInclude', function () {
            return {
                replace: true,
                restrict: 'A',
                templateUrl: function (element, attr) {
                    return attr.smartInclude;
                },
                compile: function(element){
                    element[0].className = element[0].className.replace(/placeholder[^\s]+/g, '');
                }
            };
        }
    );

});

/**
 * DETECT MOBILE DEVICES
 * Description: Detects mobile device - if any of the listed device is
 *
 * detected class is inserted to <tElement>.
 *
 *  (so far this is covering most hand held devices)
 */


define('layout/directives/smartDeviceDetect',['layout/module'], function (module) {

    

    module.registerDirective('smartDeviceDetect', function () {
        return {
            restrict: 'A',
            compile: function (tElement, tAttributes) {
                tElement.removeAttr('smart-device-detect data-smart-device-detect');

                var isMobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
                
                tElement.toggleClass('desktop-detected', !isMobile);
                tElement.toggleClass('mobile-detected', isMobile);


            }
        }
    });
});

/**
 *
 * Description: Directive utilizes FastClick library.
 *
 *
 * FastClick is a simple, easy-to-use library for eliminating the
 * 300ms delay between a physical tap and the firing of a click event on mobile browsers.
 * FastClick doesn't attach any listeners on desktop browsers.
 * @link: https://github.com/ftlabs/fastclick
 *
 * On mobile devices 'needsclick' class is attached to <tElement>
 *
 */

define('layout/directives/smartFastClick',['layout/module' , 'require', 'fastclick'], function (module, require) {

    

    module.registerDirective('smartFastClick', function () {
        var FastClick = require('fastclick');
        return {
            restrict: 'A',
            compile: function (tElement, tAttributes) {
                tElement.removeAttr('smart-fast-click data-smart-fast-click');

                FastClick.attach(tElement);

                if(!FastClick.notNeeded())
                    tElement.addClass('needsclick')
            }
        }
    });
});

define('layout/directives/smartLayout',['layout/module', 'lodash'], function (module, _) {

    

    var _debug = 0;

    function getDocHeight() {
        var D = document;
        return Math.max(
            D.body.scrollHeight, D.documentElement.scrollHeight,
            D.body.offsetHeight, D.documentElement.offsetHeight,
            D.body.clientHeight, D.documentElement.clientHeight
        );
    }


    module.registerDirective('smartLayout', ["$rootScope", "$timeout", "$interval", "$q", "SmartCss", function ($rootScope, $timeout, $interval, $q, SmartCss) {

        var initialized = false, initializedResolver = $q.defer();
        initializedResolver.promise.then(function () {
            initialized = true;
        });

        var $window = $(window),
            $document = $(document),
            $html = $('html'),
            $body = $('body'),
            $navigation ,
            $menu,
            $ribbon,
            $footer,
            $contentAnimContainer;


        (function cacheElements() {
            $navigation = $('#header');
            $menu = $('#left-panel');
            $ribbon = $('#ribbon');
            $footer = $('.page-footer');
            if (_.every([$navigation, $menu, $ribbon, $footer], function ($it) {
                return angular.isNumber($it.height())
            })) {
                initializedResolver.resolve();
            } else {
                $timeout(cacheElements, 100);
            }
        })();


        return {
            priority: 2014,
            restrict: 'A',
            compile: function (tElement, tAttributes) {
                tElement.removeAttr('smart-layout data-smart-layout');

                var appViewHeight = 0 ,
                    appViewWidth = 0,
                    calcWidth,
                    calcHeight,
                    deltaX,
                    deltaY;

                var forceResizeTrigger = false;

                function resizeListener() {

//                    full window height appHeight = Math.max($menu.outerHeight() - 10, getDocHeight() - 10);

                    var menuHeight = $body.hasClass('menu-on-top') && $menu.is(':visible') ? $menu.height() : 0;
                    var menuWidth = !$body.hasClass('menu-on-top') && $menu.is(':visible') ? $menu.width() + $menu.offset().left : 0;

                    var $content = $('#content');
                    var contentXPad = $content.outerWidth(true) - $content.width();
                    var contentYPad = $content.outerHeight(true) - $content.height();


                    calcWidth = $window.width() - menuWidth - contentXPad;
                    calcHeight = $window.height() - menuHeight - contentYPad - $navigation.height() - $ribbon.height() - $footer.height();

                    deltaX = appViewWidth - calcWidth;
                    deltaY = appViewHeight - calcHeight;
                    if (Math.abs(deltaX) || Math.abs(deltaY) || forceResizeTrigger) {

                        //console.log('exec', calcWidth, calcHeight);
                        $rootScope.$broadcast('$smartContentResize', {
                            width: calcWidth,
                            height: calcHeight,
                            deltaX: deltaX,
                            deltaY: deltaY
                        });
                        appViewWidth = calcWidth;
                        appViewHeight = calcHeight;
                        forceResizeTrigger = false;
                    }
                }


                var looping = false;
                $interval(function () {
                    if (looping) loop();
                }, 300);

                var debouncedRun = _.debounce(function () {
                    run(300)
                }, 300);

                function run(delay) {
                    initializedResolver.promise.then(function () {
                        attachOnResize(delay);
                    });
                }

                run(10);

                function detachOnResize() {
                    looping = false;
                }

                function attachOnResize(delay) {
                    $timeout(function () {
                        looping = true;
                    }, delay);
                }

                function loop() {
                    $body.toggleClass('mobile-view-activated', $window.width() < 979);

                    if ($window.width() < 979)
                        $body.removeClass('minified');

                    resizeListener();
                }

                function handleHtmlId(toState) {
                    if (toState.data && toState.data.htmlId) $html.attr('id', toState.data.htmlId);
                    else $html.removeAttr('id');
                }

                $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
                    //console.log(1, '$stateChangeStart', event, toState, toParams, fromState, fromParams);

                    handleHtmlId(toState);
                    detachOnResize();
                });

                // initialized with 1 cause we came here with one $viewContentLoading request
                var viewContentLoading = 1;
                $rootScope.$on('$viewContentLoading', function (event, viewConfig) {
                    //console.log(2, '$viewContentLoading', event, viewConfig);
                    viewContentLoading++;
                });

                $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
                    //console.log(3, '$stateChangeSuccess', event, toState, toParams, fromState, fromParams);
                    forceResizeTrigger = true;
                });

                $rootScope.$on('$viewContentLoaded', function (event) {
                    //console.log(4, '$viewContentLoaded', event);
                    viewContentLoading--;

                    if (viewContentLoading == 0 && initialized) {
                        debouncedRun();
                    }
                });
            }
        }
    }]);
});

define('layout/directives/smartSpeech',['layout/module', 'jquery'], function (module, $) {

    

	$.root_ = $('body');
	var root = window;

	

    if (appConfig.voice_command) {
            
        var commands = appConfig.commands;
        
    };
    

	/*
	 * SMART VOICE
	 * Author: MyOrange | @bootstraphunt
	 * http://www.myorange.ca
	 */

	var SpeechRecognition = root.SpeechRecognition || root.webkitSpeechRecognition || root.mozSpeechRecognition || root.msSpeechRecognition || root.oSpeechRecognition;

	// ref: http://updates.html5rocks.com/2013/01/Voice-Driven-Web-Apps-Introduction-to-the-Web-Speech-API


	// function
	$.speechApp = (function(speech) {

		speech.start = function() {

			// Add our commands to smartSpeechRecognition
			smartSpeechRecognition.addCommands(commands);

			if (smartSpeechRecognition) {
				// activate plugin
				smartSpeechRecognition.start();
				// add btn class
				$.root_.addClass("voice-command-active");
				// play sound
				$.speechApp.playON();
				// set localStorage when switch is on manually
				if (appConfig.voice_localStorage) {
					localStorage.setItem('sm-setautovoice', 'true');
				}

			} else {
				// if plugin not found
				alert("speech plugin not loaded");
			}

		};
		speech.stop = function() {

			if (smartSpeechRecognition) {
				// deactivate plugin
				smartSpeechRecognition.abort();
				// remove btn class
				$.root_.removeClass("voice-command-active");
				// sound
				$.speechApp.playOFF();
				// del localStorage when switch if off manually
				if (appConfig.voice_localStorage) {
					localStorage.setItem('sm-setautovoice', 'false');
				}
				// remove popover if visible
				if ($('#speech-btn .popover').is(':visible')) {
					$('#speech-btn .popover').fadeOut(250);
				}
			}

		};

		// play sound
		speech.playON = function() {

			var audioElement = document.createElement('audio');

			if (navigator.userAgent.match('Firefox/'))
				audioElement.setAttribute('src', appConfig.sound_path + 'voice_on' + ".ogg");
			else
				audioElement.setAttribute('src', appConfig.sound_path + 'voice_on' + ".mp3");

			//$.get();
			audioElement.addEventListener("load", function() {
				audioElement.play();
			}, true);

			if (appConfig.sound_on) {
				audioElement.pause();
				audioElement.play();
			}
		};

		speech.playOFF = function() {

			var audioElement = document.createElement('audio');

			if (navigator.userAgent.match('Firefox/'))
				audioElement.setAttribute('src', appConfig.sound_path + 'voice_off' + ".ogg");
			else
				audioElement.setAttribute('src', appConfig.sound_path + 'voice_off' + ".mp3");

			$.get();
			audioElement.addEventListener("load", function() {
				audioElement.play();
			}, true);

			if (appConfig.sound_on) {
				audioElement.pause();
				audioElement.play();
			}
		};

		speech.playConfirmation = function() {

			var audioElement = document.createElement('audio');

			if (navigator.userAgent.match('Firefox/'))
				audioElement.setAttribute('src', appConfig.sound_path + 'voice_alert' + ".ogg");
			else
				audioElement.setAttribute('src', appConfig.sound_path + 'voice_alert' + ".mp3");

			$.get();
			audioElement.addEventListener("load", function() {
				audioElement.play();
			}, true);

			if (appConfig.sound_on) {
				audioElement.pause();
				audioElement.play();
			}
		};

		return speech;

	})({});

	

	/*
	 * SPEECH RECOGNITION ENGINE
	 * Copyright (c) 2013 Tal Ater
	 * Modified by MyOrange
	 * All modifications made are hereby copyright (c) 2014 MyOrange
	 */

	(function(undefined) {

		// Check browser support
		// This is done as early as possible, to make it as fast as possible for unsupported browsers
		if (!SpeechRecognition) {
			root.smartSpeechRecognition = null;
			return undefined;
		}

		var commandsList = [], recognition, callbacks = {
			start : [],
			error : [],
			end : [],
			result : [],
			resultMatch : [],
			resultNoMatch : [],
			errorNetwork : [],
			errorPermissionBlocked : [],
			errorPermissionDenied : []
		}, autoRestart, lastStartedAt = 0,
		//debugState = false, // decleared in app.appConfig.js
		//appConfig.debugStyle = 'font-weight: bold; color: #00f;', // decleared in app.appConfig.js

		// The command matching code is a modified version of Backbone.Router by Jeremy Ashkenas, under the MIT license.
		optionalParam = /\s*\((.*?)\)\s*/g, optionalRegex = /(\(\?:[^)]+\))\?/g, namedParam = /(\(\?)?:\w+/g, splatParam = /\*\w+/g, escapeRegExp = /[\-{}\[\]+?.,\\\^$|#]/g, commandToRegExp = function(command) {
			command = command.replace(escapeRegExp, '\\$&').replace(optionalParam, '(?:$1)?').replace(namedParam, function(match, optional) {
				return optional ? match : '([^\\s]+)';
			}).replace(splatParam, '(.*?)').replace(optionalRegex, '\\s*$1?\\s*');
			return new RegExp('^' + command + '$', 'i');
		};

		// This method receives an array of callbacks to iterate over, and invokes each of them
		var invokeCallbacks = function(callbacks) {
			callbacks.forEach(function(callback) {
				callback.callback.apply(callback.context);
			});
		};

		var initIfNeeded = function() {
			if (!isInitialized()) {
				root.smartSpeechRecognition.init({}, false);
			}
		};

		var isInitialized = function() {
			return recognition !== undefined;
		};

		root.smartSpeechRecognition = {
			// Initialize smartSpeechRecognition with a list of commands to recognize.
			// e.g. smartSpeechRecognition.init({'hello :name': helloFunction})
			// smartSpeechRecognition understands commands with named variables, splats, and optional words.
			init : function(commands, resetCommands) {

				// resetCommands defaults to true
				if (resetCommands === undefined) {
					resetCommands = true;
				} else {
					resetCommands = !!resetCommands;
				}

				// Abort previous instances of recognition already running
				if (recognition && recognition.abort) {
					recognition.abort();
				}

				// initiate SpeechRecognition
				recognition = new SpeechRecognition();

				// Set the max number of alternative transcripts to try and match with a command
				recognition.maxAlternatives = 5;
				recognition.continuous = true;
				// Sets the language to the default 'en-US'. This can be changed with smartSpeechRecognition.setLanguage()
				recognition.lang = appConfig.voice_command_lang || 'en-US';

				recognition.onstart = function() {
					invokeCallbacks(callbacks.start);
					//debugState
					if (appConfig.debugState) {
						root.console.log('%c ✔ SUCCESS: User allowed access the microphone service to start ', appConfig.debugStyle_success);
						root.console.log('Language setting is set to: ' + recognition.lang, appConfig.debugStyle);
					}
					$.root_.removeClass("service-not-allowed");
					$.root_.addClass("service-allowed");
				};

				recognition.onerror = function(event) {
					invokeCallbacks(callbacks.error);
					switch (event.error) {
						case 'network':
							invokeCallbacks(callbacks.errorNetwork);
							break;
						case 'not-allowed':
						case 'service-not-allowed':
							// if permission to use the mic is denied, turn off auto-restart
							autoRestart = false;
							$.root_.removeClass("service-allowed");
							$.root_.addClass("service-not-allowed");
							//debugState
							if (appConfig.debugState) {
								root.console.log('%c WARNING: Microphone was not detected (either user denied access or it is not installed properly) ', appConfig.debugStyle_warning);
							}
							// determine if permission was denied by user or automatically.
							if (new Date().getTime() - lastStartedAt < 200) {
								invokeCallbacks(callbacks.errorPermissionBlocked);
							} else {
								invokeCallbacks(callbacks.errorPermissionDenied);
								//console.log("You need your mic to be active")
							}
							break;
					}
				};

				recognition.onend = function() {
					invokeCallbacks(callbacks.end);
					// smartSpeechRecognition will auto restart if it is closed automatically and not by user action.
					if (autoRestart) {
						// play nicely with the browser, and never restart smartSpeechRecognition automatically more than once per second
						var timeSinceLastStart = new Date().getTime() - lastStartedAt;
						if (timeSinceLastStart < 1000) {
							setTimeout(root.smartSpeechRecognition.start, 1000 - timeSinceLastStart);
						} else {
							root.smartSpeechRecognition.start();
						}
					}
				};

				recognition.onresult = function(event) {
					invokeCallbacks(callbacks.result);

					var results = event.results[event.resultIndex], commandText;

					// go over each of the 5 results and alternative results received (we've set maxAlternatives to 5 above)
					for (var i = 0; i < results.length; i++) {
						// the text recognized
						commandText = results[i].transcript.trim();
						if (appConfig.debugState) {
							root.console.log('Speech recognized: %c' + commandText, appConfig.debugStyle);
						}

						// try and match recognized text to one of the commands on the list
						for (var j = 0, l = commandsList.length; j < l; j++) {
							var result = commandsList[j].command.exec(commandText);
							if (result) {
								var parameters = result.slice(1);
								if (appConfig.debugState) {
									root.console.log('command matched: %c' + commandsList[j].originalPhrase, appConfig.debugStyle);
									if (parameters.length) {
										root.console.log('with parameters', parameters);
									}
								}
								// execute the matched command
								commandsList[j].callback.apply(this, parameters);
								invokeCallbacks(callbacks.resultMatch);

								// for commands "sound on", "stop" and "mute" do not play sound or display message
								//var myMatchedCommand = commandsList[j].originalPhrase;

								var ignoreCallsFor = ["sound on", "mute", "stop"];

								if (ignoreCallsFor.indexOf(commandsList[j].originalPhrase) < 0) {
									// play sound when match found
									console.log(2);
									$.smallBox({
										title : (commandsList[j].originalPhrase),
										content : "loading...",
										color : "#333",
										sound_file : 'voice_alert',
										timeout : 2000
									});

									if ($('#speech-btn .popover').is(':visible')) {
										$('#speech-btn .popover').fadeOut(250);
									}
								}// end if

								return true;
							}
						} // end for
					}// end for

					invokeCallbacks(callbacks.resultNoMatch);
					//console.log("no match found for: " + commandText)
					$.smallBox({
						title : "Error: <strong>" + ' " ' + commandText + ' " ' + "</strong> no match found!",
						content : "Please speak clearly into the microphone",
						color : "#a90329",
						timeout : 5000,
						icon : "fa fa-microphone"
					});
					if ($('#speech-btn .popover').is(':visible')) {
						$('#speech-btn .popover').fadeOut(250);
					}
					return false;
				};

				// build commands list
				if (resetCommands) {
					commandsList = [];
				}
				if (commands.length) {
					this.addCommands(commands);
				}
			},

			// Start listening (asking for permission first, if needed).
			// Call this after you've initialized smartSpeechRecognition with commands.
			// Receives an optional options object:
			// { autoRestart: true }
			start : function(options) {
				initIfNeeded();
				options = options || {};
				if (options.autoRestart !== undefined) {
					autoRestart = !!options.autoRestart;
				} else {
					autoRestart = true;
				}
				lastStartedAt = new Date().getTime();
				recognition.start();
			},

			// abort the listening session (aka stop)
			abort : function() {
				autoRestart = false;
				if (isInitialized) {
					recognition.abort();
				}
			},

			// Turn on output of debug messages to the console. Ugly, but super-handy!
			debug : function(newState) {
				if (arguments.length > 0) {
					appConfig.debugState = !!newState;
				} else {
					appConfig.debugState = true;
				}
			},

			// Set the language the user will speak in. If not called, defaults to 'en-US'.
			// e.g. 'fr-FR' (French-France), 'es-CR' (Español-Costa Rica)
			setLanguage : function(language) {
				initIfNeeded();
				recognition.lang = language;
			},

			// Add additional commands that smartSpeechRecognition will respond to. Similar in syntax to smartSpeechRecognition.init()
			addCommands : function(commands) {
				var cb, command;

				initIfNeeded();

				for (var phrase in commands) {
					if (commands.hasOwnProperty(phrase)) {
						cb = root[commands[phrase]] || commands[phrase];
						if ( typeof cb !== 'function') {
							continue;
						}
						//convert command to regex
						command = commandToRegExp(phrase);

						commandsList.push({
							command : command,
							callback : cb,
							originalPhrase : phrase
						});
					}
				}
				if (appConfig.debugState) {
					root.console.log('Commands successfully loaded: %c' + commandsList.length, appConfig.debugStyle);
				}
			},

			// Remove existing commands. Called with a single phrase, array of phrases, or methodically. Pass no params to remove all commands.
			removeCommands : function(commandsToRemove) {
				if (commandsToRemove === undefined) {
					commandsList = [];
					return;
				}
				commandsToRemove = Array.isArray(commandsToRemove) ? commandsToRemove : [commandsToRemove];
				commandsList = commandsList.filter(function(command) {
					for (var i = 0; i < commandsToRemove.length; i++) {
						if (commandsToRemove[i] === command.originalPhrase) {
							return false;
						}
					}
					return true;
				});
			},

			// Lets the user add a callback of one of 9 types:
			// start, error, end, result, resultMatch, resultNoMatch, errorNetwork, errorPermissionBlocked, errorPermissionDenied
			// Can also optionally receive a context for the callback function as the third argument
			addCallback : function(type, callback, context) {
				if (callbacks[type] === undefined) {
					return;
				}
				var cb = root[callback] || callback;
				if ( typeof cb !== 'function') {
					return;
				}
				callbacks[type].push({
					callback : cb,
					context : context || this
				});
			}
		};

	}).call(this);

	var autoStart = function() {

		smartSpeechRecognition.addCommands(commands);

		if (smartSpeechRecognition) {
			// activate plugin
			smartSpeechRecognition.start();
			// add btn class
			$.root_.addClass("voice-command-active");
			// set localStorage when switch is on manually
			if (appConfig.voice_localStorage) {
				localStorage.setItem('sm-setautovoice', 'true');
			}

		} else {
			// if plugin not found
			alert("speech plugin not loaded");
		}
	}
	// if already running with localstorage
	if (SpeechRecognition && appConfig.voice_command && localStorage.getItem('sm-setautovoice') == 'true') {
		autoStart();
	}

	// auto start
	if (SpeechRecognition && appConfig.voice_command_auto && appConfig.voice_command) {
		autoStart();
	}


    module.registerDirective('speechRecognition', ["$log", function ($log) {

    	var link = function(scope, element) {


			if (SpeechRecognition && appConfig.voice_command) {

				// create dynamic modal instance
				var modal = $('<div class="modal fade" id="voiceModal" tabindex="-1" role="dialog" aria-labelledby="remoteModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"></div></div></div>');
				// attach to body
				modal.appendTo("body");

				element.on("click", function(e) {

                	if ($.root_.hasClass("voice-command-active")) {
						$.speechApp.stop();
						//$('#speech-btn > span > a > i').removeClass().addClass('fa fa-microphone-slash');
					} else {
						$.speechApp.start();
						//add popover
						$('#speech-btn .popover').fadeIn(350);
						//$('#speech-btn > span > a > i').removeClass().addClass('fa fa-microphone')

					}

					e.preventDefault();

                });

				//remove popover
				$(document).mouseup(function(e) {
					if (!$('#speech-btn .popover').is(e.target) && $('#speech-btn .popover').has(e.target).length === 0) {
						$('#speech-btn .popover').fadeOut(250);
					}
				});


				$("#speech-help-btn").on("click", function() {
					commands.help();
				});

			}
			else {
				$("#speech-btn").addClass("display-none");
			}


    	}



        return {
            restrict: 'AE',
            link: link
        }
    }]);



});

define('layout/directives/smartRouterAnimationWrap',['layout/module', 'lodash'], function (module, _) {

    

    module.registerDirective('smartRouterAnimationWrap', ["$rootScope", "$timeout", function ($rootScope,$timeout) {
        return {
            restrict: 'A',
            compile: function (element, attributes) {
                element.removeAttr('smart-router-animation-wrap data-smart-router-animation-wrap wrap-for data-wrap-for');

                element.addClass('router-animation-container');


                $('<div class="router-animation-loader"><i class="fa fa-gear fa-4x fa-spin"></i></div>').appendTo(element);


                var animateElementSelector = attributes.wrapFor;
                var viewsToMatch = attributes.smartRouterAnimationWrap.split(/\s/);

                var needRunContentViewAnimEnd = false;
                function contentViewAnimStart() {
                    needRunContentViewAnimEnd = true;
                    element.css({
                        height: element.height() + 'px',
                        overflow: 'hidden'
                    }).addClass('active');

                    $(animateElementSelector).addClass('animated faster fadeOutDown');
                }

                function contentViewAnimEnd() {
                    if(needRunContentViewAnimEnd){
                        element.css({
                            height: 'auto',
                            overflow: 'visible'
                        }).removeClass('active');

                        $(animateElementSelector).addClass('animated faster fadeInUp');

                        needRunContentViewAnimEnd = false;

                        $timeout(function(){
                            $(animateElementSelector).removeClass('animated');
                        },10);
                    }
                }


                var destroyForStart = $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
                    var isAnimRequired = _.any(viewsToMatch, function(view){
                       return _.has(toState.views, view) || _.has(fromState.views, view);
                    });
                    if(isAnimRequired){
                        contentViewAnimStart()
                    }
                });

                var destroyForEnd = $rootScope.$on('$viewContentLoaded', function (event) {
                    contentViewAnimEnd();
                });

                element.on('$destroy', function(){
                    destroyForStart();
                    destroyForEnd();

                });



            }
        }
    }]);
});

define('layout/directives/smartFitAppView',['layout/module', 'lodash'], function (module, _) {

    

    module.registerDirective('smartFitAppView', ["$rootScope", "SmartCss", function ($rootScope, SmartCss) {
        return {
            restrict: 'A',
            compile: function (element, attributes) {
                element.removeAttr('smart-fit-app-view data-smart-fit-app-view leading-y data-leading-y');

                var leadingY = attributes.leadingY ? parseInt(attributes.leadingY) : 0;

                var selector = attributes.smartFitAppView;

                if(SmartCss.appViewSize && SmartCss.appViewSize.height){
                    var height =  SmartCss.appViewSize.height - leadingY < 252 ? 252 :  SmartCss.appViewSize.height - leadingY;
                    SmartCss.add(selector, 'height', height+'px');
                }

                var listenerDestroy = $rootScope.$on('$smartContentResize', function (event, data) {
                    var height = data.height - leadingY < 252 ? 252 : data.height - leadingY;
                    SmartCss.add(selector, 'height', height+'px');
                });

                element.on('$destroy', function () {
                    listenerDestroy();
                    SmartCss.remove(selector, 'height');
                });


            }
        }
    }]);
});

define('layout/directives/radioToggle',['layout/module'], function (module) {

    

    /*
    * Directive for toggling a ng-model with a button
    * Source: https://gist.github.com/aeife/9374784
    */

    module.registerDirective('radioToggle', ["$log", function ($log) {
      return {
        scope: {
          model: "=ngModel",
          value: "@value"
        },
        link: function(scope, element, attrs) {

          element.parent().on('click', function() {
            scope.model = scope.value;
            scope.$apply();
          });
        }
      }
    }]);
});
define('layout/directives/dismisser',['layout/module'], function (module) {

    

    module.registerDirective('dismisser', function () {
        return {
            restrict: 'A',
            compile: function (element) {
                element.removeAttr('dismisser data-dissmiser')
                var closer = '<button class="close">&times;</button>';
                element.prepend(closer);
                element.on('click', '>button.close', function(){
                    element.fadeOut('fast',function(){ $(this).remove(); });

                })
            }
        }
    });
});

define('layout/directives/smartMenu',['layout/module', 'jquery'], function (module) {

    

    (function ($) {

        $.fn.smartCollapseToggle = function () {

            return this.each(function () {

                var $body = $('body');
                var $this = $(this);

                // only if not  'menu-on-top'
                if ($body.hasClass('menu-on-top')) {


                } else {

                    $body.hasClass('mobile-view-activated')

                    // toggle open
                    $this.toggleClass('open');

                    // for minified menu collapse only second level
                    if ($body.hasClass('minified')) {
                        if ($this.closest('nav ul ul').length) {
                            $this.find('>a .collapse-sign .fa').toggleClass('fa-minus-square-o fa-plus-square-o');
                            $this.find('ul:first').slideToggle(appConfig.menu_speed || 200);
                        }
                    } else {
                        // toggle expand item
                        $this.find('>a .collapse-sign .fa').toggleClass('fa-minus-square-o fa-plus-square-o');
                        $this.find('ul:first').slideToggle(appConfig.menu_speed || 200);
                    }
                }
            });
        };
    })(jQuery);

    module.registerDirective('smartMenu', ["$state", "$rootScope", function ($state, $rootScope) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                var $body = $('body');

                var $collapsible = element.find('li[data-menu-collapse]');
                $collapsible.each(function (idx, li) {
                    var $li = $(li);
                    $li
                        .on('click', '>a', function (e) {

                            // collapse all open siblings
                            $li.siblings('.open').smartCollapseToggle();

                            // toggle element
                            $li.smartCollapseToggle();

                            // add active marker to collapsed element if it has active childs
                            if (!$li.hasClass('open') && $li.find('li.active').length > 0) {
                                $li.addClass('active')
                            }

                            e.preventDefault();
                        })
                        .find('>a').append('<b class="collapse-sign"><em class="fa fa-plus-square-o"></em></b>');

                    // initialization toggle
                    if ($li.find('li.active').length) {
                        $li.smartCollapseToggle();
                        $li.find('li.active').parents('li').addClass('active');
                    }
                });

                // click on route link
                element.on('click', 'a[data-ui-sref]', function (e) {
                    // collapse all siblings to element parents and remove active markers
                    $(this)
                        .parents('li').addClass('active')
                        .each(function () {
                            $(this).siblings('li.open').smartCollapseToggle();
                            $(this).siblings('li').removeClass('active')
                        });

                    if ($body.hasClass('mobile-view-activated')) {
                        $rootScope.$broadcast('requestToggleMenu');
                    }
                });


                scope.$on('$smartLayoutMenuOnTop', function (event, menuOnTop) {
                    if (menuOnTop) {
                        $collapsible.filter('.open').smartCollapseToggle();
                    }
                });

            }
        }
    }]);


});

define('layout/directives/bigBreadcrumbs',['layout/module', 'lodash'], function (module, _) {

    

    module.registerDirective('bigBreadcrumbs', function () {
        return {
            restrict: 'E',
            replace: true,
            template: '<div><h1 class="page-title txt-color-blueDark"></h1></div>',
            scope: {
                items: '=',
                icon: '@'
            },
            link: function (scope, element) {
                var first = _.first(scope.items);

                var icon = scope.icon || 'home';
                element.find('h1').append('<i class="fa-fw fa fa-' + icon + '"></i> ' + first);
                _.rest(scope.items).forEach(function (item) {
                    element.find('h1').append(' <span>> ' + item + '</span>')
                })
            }
        }
    });
});

define('layout/directives/stateBreadcrumbs',['layout/module'], function (module) {

    

    module.registerDirective('stateBreadcrumbs', ["$rootScope", "$state", function ($rootScope, $state) {


        return {
            restrict: 'E',
            replace: true,
            template: '<ol class="breadcrumb"><li>Home</li></ol>',
            link: function (scope, element) {

                function setBreadcrumbs(breadcrumbs) {
                    var html = '<li>Home</li>';
                    angular.forEach(breadcrumbs, function (crumb) {
                        html += '<li>' + crumb + '</li>'
                    });
                    element.html(html)
                }

                function fetchBreadcrumbs(stateName, breadcrunbs) {

                    var state = $state.get(stateName);

                    if (state && state.data && state.data.title && breadcrunbs.indexOf(state.data.title) == -1) {
                        breadcrunbs.unshift(state.data.title)
                    }

                    var parentName = stateName.replace(/.?\w+$/, '');
                    if (parentName) {
                        return fetchBreadcrumbs(parentName, breadcrunbs);
                    } else {
                        return breadcrunbs;
                    }
                }

                function processState(state) {
                    var breadcrumbs;
                    if (state.data && state.data.breadcrumbs) {
                        breadcrumbs = state.data.breadcrumbs;
                    } else {
                        breadcrumbs = fetchBreadcrumbs(state.name, []);
                    }
                    setBreadcrumbs(breadcrumbs);
                }

                processState($state.current);

                $rootScope.$on('$stateChangeStart', function (event, state) {
                    processState(state);
                })
            }
        }
    }]);
});

define('layout/directives/smartPageTitle',['layout/module'], function (module) {

    

    module.registerDirective('smartPageTitle', ["$rootScope", "$timeout", function ($rootScope, $timeout) {
        return {
            restrict: 'A',
            compile: function (element, attributes) {
                element.removeAttr('smart-page-title data-smart-page-title');

                var defaultTitle = attributes.smartPageTitle;
                var listener = function(event, toState, toParams, fromState, fromParams) {
                    var title = defaultTitle;
                    if (toState.data && toState.data.title) title = toState.data.title + ' | ' + title;
                    // Set asynchronously so page changes before title does
                    $timeout(function() {
                        $('html head title').text(title);
                    });
                };

                $rootScope.$on('$stateChangeStart', listener);

            }
        }
    }]);
});

define('layout/directives/hrefVoid',['layout/module'], function (module) {

    

    module.registerDirective('hrefVoid', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attributes) {
                element.attr('href','#');
                element.on('click', function(e){
                    e.preventDefault();
                    e.stopPropagation();
                })
            }
        }
    });
});

define('layout/service/SmartCss',['layout/module', 'lodash'], function (module, _) {

    

    module.registerFactory('SmartCss', ["$rootScope", "$timeout", function ($rootScope, $timeout) {

        var sheet = (function () {
            // Create the <style> tag
            var style = document.createElement("style");

            // Add a media (and/or media query) here if you'd like!
            // style.setAttribute("media", "screen")
            // style.setAttribute("media", "@media only screen and (max-width : 1024px)")

            // WebKit hack :(
            style.appendChild(document.createTextNode(""));

            // Add the <style> element to the page
            document.head.appendChild(style);

            return style.sheet;
        })();

        var _styles = {};


        var SmartCss = {
            writeRule: function(selector){
                SmartCss.deleteRuleFor(selector);
                if(_.has(_styles, selector)){
                    var css = selector + '{ ' + _.map(_styles[selector], function(v, k){
                        return  k + ':' +  v + ';'
                    }).join(' ') +'}';
                    sheet.insertRule(css)
                }
            },
            add: function (selector, property, value, delay) {
                if(!_.has(_styles, selector))
                    _styles[selector] = {};

                if(value == undefined || value == null || value == '')
                    delete _styles[selector][property];
                else
                    _styles[selector][property] = value;


                if(_.keys(_styles[selector]).length == 0)
                    delete _styles[selector];

                if(!delay)
                    delay = 0;
                $timeout(function(){
                    SmartCss.writeRule(selector);
                }, delay);

            },
            remove: function(selector, property, delay){
                SmartCss.add(selector, property, null, delay);
            },
            deleteRuleFor: function (selector) {
                _(sheet.rules).forEach(function (rule, idx) {
                    if (rule.selectorText == selector) {
                        sheet.deleteRule(idx);
                    }
                });
            },
            appViewSize: null
        };

        $rootScope.$on('$smartContentResize', function (event, data) {
            SmartCss.appViewSize = data;
        });

        return SmartCss;

    }]);
});




define('dashboard/module',[
    'angular',
    'angular-couch-potato',
    'angular-ui-router',
    'angular-resource'
], function (ng, couchPotato) {
    

    var module = ng.module('app.dashboard', [
        'ui.router',
        'ngResource'
    ]);

    module.config(["$stateProvider", "$couchPotatoProvider", function ($stateProvider, $couchPotatoProvider) {
        $stateProvider
            .state('app.dashboard', {
                url: '/dashboard',
                views: {
                    "content@app": {
                        controller: 'DashboardCtrl',
                        templateUrl: 'build/dashboard/dashboard.html',
                        resolve: {
                            deps: $couchPotatoProvider.resolveDependencies([
                                'dashboard/DashboardCtrl'
                            ])
                        }
                    }
                },
                data:{
                    title: 'Dashboard'
                }
            });
    }]);

    couchPotato.configureApp(module);

    module.run(["$couchPotato", function($couchPotato){
        module.lazy = $couchPotato;
    }]);

    return module;
});

define('components/language/Language',['app'], function(app){
    

    return app.factory('Language', ["$http", function($http){

		function getLanguage(key, callback) {

			$http.get('api/langs/' + key + '.json').success(function(data){

				callback(data);
				
			}).error(function(){

				$log.log('Error');
				callback([]);

			});

		}

		function getLanguages(callback) {

			$http.get('api/languages.json').success(function(data){

				callback(data);
				
			}).error(function(){

				$log.log('Error');
				callback([]);

			});

		}

		return {
			getLang: function(type, callback) {
				getLanguage(type, callback);
			},
			getLanguages:function(callback){
				getLanguages(callback);
			}
		}

    }])
})
;
define('components/language/languageSelector',['app'], function(module){
    

    module.registerDirective('languageSelector', ["Language", function(Language){
        return {
            restrict: "EA",
            replace: true,
            templateUrl: "build/components/language/language-selector.tpl.html",
            scope: true,
        }
    }])
});

define('components/language/language-controller',['app'], function(app){
    

			LanguagesCtrl.$inject = ["$scope", "$rootScope", "$log", "Language"];
	    return app.controller("LanguagesCtrl", LanguagesCtrl);

			function LanguagesCtrl($scope, $rootScope, $log, Language){

				$rootScope.lang = {};
				
				Language.getLanguages(function(data){

                    $rootScope.currentLanguage = data[0];

                    $rootScope.languages = data;

                    Language.getLang(data[0].key,function(data){

                    	$rootScope.lang = data;
                    });

                });

				$scope.selectLanguage = function(language){
                    $rootScope.currentLanguage = language;
                    
                    Language.getLang(language.key,function(data){

                    	$rootScope.lang = data;
                        
                    });
                }


                $rootScope.getWord = function(key){
                	if(angular.isDefined($rootScope.lang[key])){
                		return $rootScope.lang[key];
                	} 
                	else {
                		return key;
                	}
                }

			}

});
define('smart-templates',['angular'], function(){angular.module('smart-templates', []).run(['$templateCache', function($templateCache) {
  $templateCache.put("build/auth/directives/login-info.tpl.html",
    "<div class=\"login-info ng-cloak\">\n" +
    "    <span> <!-- User image size is adjusted inside CSS, it should stay as it -->\n" +
    "        <a  href=\"\">\n" +
    "            <img ng-src=\"{{user.picture}}\" alt=\"me\" class=\"online\">\n" +
    "                <span>{{user.username}}\n" +
    "                </span>\n" +
    "            <i class=\"fa fa-angle-down\"></i>\n" +
    "        </a>\n" +
    "     </span>\n" +
    "</div>\n" +
    "");
  $templateCache.put("build/components/language/language-selector.tpl.html",
    "<ul class=\"header-dropdown-list hidden-xs ng-cloak\" ng-controller=\"LanguagesCtrl\">\n" +
    "    <li class=\"dropdown\">\n" +
    "        <a class=\"dropdown-toggle\" href> <img src=\"styles/img/blank.gif\" class=\"flag flag-{{currentLanguage.key}}\" alt=\"{{currentLanguage.alt}}\"> <span> {{currentLanguage.title}} </span>\n" +
    "            <i class=\"fa fa-angle-down\"></i> </a>\n" +
    "        <ul class=\"dropdown-menu pull-right\">\n" +
    "            <li ng-class=\"{active: language==currentLanguage}\" ng-repeat=\"language in languages\">\n" +
    "                <a ng-click=\"selectLanguage(language)\" ><img src=\"styles/img/blank.gif\" class=\"flag flag-{{language.key}}\"\n" +
    "                                                   alt=\"{{language.alt}}\"> {{language.title}}</a>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </li>\n" +
    "</ul>");
  $templateCache.put("build/dashboard/live-feeds.tpl.html",
    "<div jarvis-widget id=\"live-feeds-widget\" data-widget-togglebutton=\"false\" data-widget-editbutton=\"false\"\n" +
    "     data-widget-fullscreenbutton=\"false\" data-widget-colorbutton=\"false\" data-widget-deletebutton=\"false\">\n" +
    "<!-- widget options:\n" +
    "usage: <div class=\"jarviswidget\" id=\"wid-id-0\" data-widget-editbutton=\"false\">\n" +
    "\n" +
    "data-widget-colorbutton=\"false\"\n" +
    "data-widget-editbutton=\"false\"\n" +
    "data-widget-togglebutton=\"false\"\n" +
    "data-widget-deletebutton=\"false\"\n" +
    "data-widget-fullscreenbutton=\"false\"\n" +
    "data-widget-custombutton=\"false\"\n" +
    "data-widget-collapsed=\"true\"\n" +
    "data-widget-sortable=\"false\"\n" +
    "\n" +
    "-->\n" +
    "<header>\n" +
    "    <span class=\"widget-icon\"> <i class=\"glyphicon glyphicon-stats txt-color-darken\"></i> </span>\n" +
    "\n" +
    "    <h2>Live Feeds </h2>\n" +
    "\n" +
    "    <ul class=\"nav nav-tabs pull-right in\" id=\"myTab\">\n" +
    "        <li class=\"active\">\n" +
    "            <a data-toggle=\"tab\" href=\"#s1\"><i class=\"fa fa-clock-o\"></i> <span class=\"hidden-mobile hidden-tablet\">Live Stats</span></a>\n" +
    "        </li>\n" +
    "\n" +
    "        <li>\n" +
    "            <a data-toggle=\"tab\" href=\"#s2\"><i class=\"fa fa-facebook\"></i> <span class=\"hidden-mobile hidden-tablet\">Social Network</span></a>\n" +
    "        </li>\n" +
    "\n" +
    "        <li>\n" +
    "            <a data-toggle=\"tab\" href=\"#s3\"><i class=\"fa fa-dollar\"></i> <span class=\"hidden-mobile hidden-tablet\">Revenue</span></a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "\n" +
    "</header>\n" +
    "\n" +
    "<!-- widget div-->\n" +
    "<div class=\"no-padding\">\n" +
    "\n" +
    "    <div class=\"widget-body\">\n" +
    "        <!-- content -->\n" +
    "        <div id=\"myTabContent\" class=\"tab-content\">\n" +
    "            <div class=\"tab-pane fade active in padding-10 no-padding-bottom\" id=\"s1\">\n" +
    "                <div class=\"row no-space\">\n" +
    "                    <div class=\"col-xs-12 col-sm-12 col-md-8 col-lg-8\">\n" +
    "														<span class=\"demo-liveupdate-1\"> <span\n" +
    "                                                                class=\"onoffswitch-title\">Live switch</span> <span\n" +
    "                                                                class=\"onoffswitch\">\n" +
    "																<input type=\"checkbox\" name=\"start_interval\" ng-model=\"autoUpdate\"\n" +
    "                                                                       class=\"onoffswitch-checkbox\" id=\"start_interval\">\n" +
    "																<label class=\"onoffswitch-label\" for=\"start_interval\">\n" +
    "                                                                    <span class=\"onoffswitch-inner\"\n" +
    "                                                                          data-swchon-text=\"ON\"\n" +
    "                                                                          data-swchoff-text=\"OFF\"></span>\n" +
    "                                                                    <span class=\"onoffswitch-switch\"></span>\n" +
    "                                                                </label> </span> </span>\n" +
    "\n" +
    "                        <div id=\"updating-chart\" class=\"chart-large txt-color-blue\" flot-basic flot-data=\"liveStats\" flot-options=\"liveStatsOptions\"></div>\n" +
    "\n" +
    "                    </div>\n" +
    "                    <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4 show-stats\">\n" +
    "\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-xs-6 col-sm-6 col-md-12 col-lg-12\"><span class=\"text\"> My Tasks <span\n" +
    "                                    class=\"pull-right\">130/200</span> </span>\n" +
    "\n" +
    "                                <div class=\"progress\">\n" +
    "                                    <div class=\"progress-bar bg-color-blueDark\" style=\"width: 65%;\"></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-xs-6 col-sm-6 col-md-12 col-lg-12\"><span class=\"text\"> Transfered <span\n" +
    "                                    class=\"pull-right\">440 GB</span> </span>\n" +
    "\n" +
    "                                <div class=\"progress\">\n" +
    "                                    <div class=\"progress-bar bg-color-blue\" style=\"width: 34%;\"></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-xs-6 col-sm-6 col-md-12 col-lg-12\"><span class=\"text\"> Bugs Squashed<span\n" +
    "                                    class=\"pull-right\">77%</span> </span>\n" +
    "\n" +
    "                                <div class=\"progress\">\n" +
    "                                    <div class=\"progress-bar bg-color-blue\" style=\"width: 77%;\"></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-xs-6 col-sm-6 col-md-12 col-lg-12\"><span class=\"text\"> User Testing <span\n" +
    "                                    class=\"pull-right\">7 Days</span> </span>\n" +
    "\n" +
    "                                <div class=\"progress\">\n" +
    "                                    <div class=\"progress-bar bg-color-greenLight\" style=\"width: 84%;\"></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "\n" +
    "                            <span class=\"show-stat-buttons\"> <span class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\"> <a\n" +
    "                                    href-void class=\"btn btn-default btn-block hidden-xs\">Generate PDF</a> </span> <span\n" +
    "                                    class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\"> <a href-void\n" +
    "                                                                                     class=\"btn btn-default btn-block hidden-xs\">Report\n" +
    "                                a bug</a> </span> </span>\n" +
    "\n" +
    "                        </div>\n" +
    "\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"show-stat-microcharts\" data-sparkline-container data-easy-pie-chart-container>\n" +
    "                    <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\">\n" +
    "\n" +
    "                        <div class=\"easy-pie-chart txt-color-orangeDark\" data-percent=\"33\" data-pie-size=\"50\">\n" +
    "                            <span class=\"percent percent-sign\">35</span>\n" +
    "                        </div>\n" +
    "                        <span class=\"easy-pie-title\"> Server Load <i class=\"fa fa-caret-up icon-color-bad\"></i> </span>\n" +
    "                        <ul class=\"smaller-stat hidden-sm pull-right\">\n" +
    "                            <li>\n" +
    "                                <span class=\"label bg-color-greenLight\"><i class=\"fa fa-caret-up\"></i> 97%</span>\n" +
    "                            </li>\n" +
    "                            <li>\n" +
    "                                <span class=\"label bg-color-blueLight\"><i class=\"fa fa-caret-down\"></i> 44%</span>\n" +
    "                            </li>\n" +
    "                        </ul>\n" +
    "                        <div class=\"sparkline txt-color-greenLight hidden-sm hidden-md pull-right\"\n" +
    "                             data-sparkline-type=\"line\" data-sparkline-height=\"33px\" data-sparkline-width=\"70px\"\n" +
    "                             data-fill-color=\"transparent\">\n" +
    "                            130, 187, 250, 257, 200, 210, 300, 270, 363, 247, 270, 363, 247\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\">\n" +
    "                        <div class=\"easy-pie-chart txt-color-greenLight\" data-percent=\"78.9\" data-pie-size=\"50\">\n" +
    "                            <span class=\"percent percent-sign\">78.9 </span>\n" +
    "                        </div>\n" +
    "                        <span class=\"easy-pie-title\"> Disk Space <i class=\"fa fa-caret-down icon-color-good\"></i></span>\n" +
    "                        <ul class=\"smaller-stat hidden-sm pull-right\">\n" +
    "                            <li>\n" +
    "                                <span class=\"label bg-color-blueDark\"><i class=\"fa fa-caret-up\"></i> 76%</span>\n" +
    "                            </li>\n" +
    "                            <li>\n" +
    "                                <span class=\"label bg-color-blue\"><i class=\"fa fa-caret-down\"></i> 3%</span>\n" +
    "                            </li>\n" +
    "                        </ul>\n" +
    "                        <div class=\"sparkline txt-color-blue hidden-sm hidden-md pull-right\" data-sparkline-type=\"line\"\n" +
    "                             data-sparkline-height=\"33px\" data-sparkline-width=\"70px\" data-fill-color=\"transparent\">\n" +
    "                            257, 200, 210, 300, 270, 363, 130, 187, 250, 247, 270, 363, 247\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\">\n" +
    "                        <div class=\"easy-pie-chart txt-color-blue\" data-percent=\"23\" data-pie-size=\"50\">\n" +
    "                            <span class=\"percent percent-sign\">23 </span>\n" +
    "                        </div>\n" +
    "                        <span class=\"easy-pie-title\"> Transfered <i class=\"fa fa-caret-up icon-color-good\"></i></span>\n" +
    "                        <ul class=\"smaller-stat hidden-sm pull-right\">\n" +
    "                            <li>\n" +
    "                                <span class=\"label bg-color-darken\">10GB</span>\n" +
    "                            </li>\n" +
    "                            <li>\n" +
    "                                <span class=\"label bg-color-blueDark\"><i class=\"fa fa-caret-up\"></i> 10%</span>\n" +
    "                            </li>\n" +
    "                        </ul>\n" +
    "                        <div class=\"sparkline txt-color-darken hidden-sm hidden-md pull-right\"\n" +
    "                             data-sparkline-type=\"line\" data-sparkline-height=\"33px\" data-sparkline-width=\"70px\"\n" +
    "                             data-fill-color=\"transparent\">\n" +
    "                            200, 210, 363, 247, 300, 270, 130, 187, 250, 257, 363, 247, 270\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\">\n" +
    "                        <div class=\"easy-pie-chart txt-color-darken\" data-percent=\"36\" data-pie-size=\"50\">\n" +
    "                            <span class=\"percent degree-sign\">36 <i class=\"fa fa-caret-up\"></i></span>\n" +
    "                        </div>\n" +
    "                        <span class=\"easy-pie-title\"> Temperature <i\n" +
    "                                class=\"fa fa-caret-down icon-color-good\"></i></span>\n" +
    "                        <ul class=\"smaller-stat hidden-sm pull-right\">\n" +
    "                            <li>\n" +
    "                                <span class=\"label bg-color-red\"><i class=\"fa fa-caret-up\"></i> 124</span>\n" +
    "                            </li>\n" +
    "                            <li>\n" +
    "                                <span class=\"label bg-color-blue\"><i class=\"fa fa-caret-down\"></i> 40 F</span>\n" +
    "                            </li>\n" +
    "                        </ul>\n" +
    "                        <div class=\"sparkline txt-color-red hidden-sm hidden-md pull-right\" data-sparkline-type=\"line\"\n" +
    "                             data-sparkline-height=\"33px\" data-sparkline-width=\"70px\" data-fill-color=\"transparent\">\n" +
    "                            2700, 3631, 2471, 2700, 3631, 2471, 1300, 1877, 2500, 2577, 2000, 2100, 3000\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "            <!-- end s1 tab pane -->\n" +
    "\n" +
    "            <div class=\"tab-pane fade\" id=\"s2\">\n" +
    "                <div class=\"widget-body-toolbar bg-color-white\">\n" +
    "\n" +
    "                    <form class=\"form-inline\" role=\"form\">\n" +
    "\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label class=\"sr-only\" for=\"s123\">Show From</label>\n" +
    "                            <input type=\"email\" class=\"form-control input-sm\" id=\"s123\" placeholder=\"Show From\">\n" +
    "                        </div>\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <input type=\"email\" class=\"form-control input-sm\" id=\"s124\" placeholder=\"To\">\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"btn-group hidden-phone pull-right\">\n" +
    "                            <a class=\"btn dropdown-toggle btn-xs btn-default\" data-toggle=\"dropdown\"><i\n" +
    "                                    class=\"fa fa-cog\"></i> More <span class=\"caret\"> </span> </a>\n" +
    "                            <ul class=\"dropdown-menu pull-right\">\n" +
    "                                <li>\n" +
    "                                    <a href-void><i class=\"fa fa-file-text-alt\"></i> Export to PDF</a>\n" +
    "                                </li>\n" +
    "                                <li>\n" +
    "                                    <a href-void><i class=\"fa fa-question-sign\"></i> Help</a>\n" +
    "                                </li>\n" +
    "                            </ul>\n" +
    "                        </div>\n" +
    "\n" +
    "                    </form>\n" +
    "\n" +
    "                </div>\n" +
    "                <div class=\"padding-10\">\n" +
    "                    <div id=\"statsChart\" class=\"chart-large has-legend-unique\" flot-basic flot-data=\"statsData\" flot-options=\"statsDisplayOptions\"></div>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "            <!-- end s2 tab pane -->\n" +
    "\n" +
    "            <div class=\"tab-pane fade\" id=\"s3\">\n" +
    "\n" +
    "                <div class=\"widget-body-toolbar bg-color-white smart-form\" id=\"rev-toggles\">\n" +
    "\n" +
    "                    <div class=\"inline-group\">\n" +
    "\n" +
    "                        <label for=\"gra-0\" class=\"checkbox\">\n" +
    "                            <input type=\"checkbox\" id=\"gra-0\" ng-model=\"targetsShow\">\n" +
    "                            <i></i> Target </label>\n" +
    "                        <label for=\"gra-1\" class=\"checkbox\">\n" +
    "                            <input type=\"checkbox\" id=\"gra-1\" ng-model=\"actualsShow\">\n" +
    "                            <i></i> Actual </label>\n" +
    "                        <label for=\"gra-2\" class=\"checkbox\">\n" +
    "                            <input type=\"checkbox\" id=\"gra-2\" ng-model=\"signupsShow\">\n" +
    "                            <i></i> Signups </label>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"btn-group hidden-phone pull-right\">\n" +
    "                        <a class=\"btn dropdown-toggle btn-xs btn-default\" data-toggle=\"dropdown\"><i\n" +
    "                                class=\"fa fa-cog\"></i> More <span class=\"caret\"> </span> </a>\n" +
    "                        <ul class=\"dropdown-menu pull-right\">\n" +
    "                            <li>\n" +
    "                                <a href-void><i class=\"fa fa-file-text-alt\"></i> Export to PDF</a>\n" +
    "                            </li>\n" +
    "                            <li>\n" +
    "                                <a href-void><i class=\"fa fa-question-sign\"></i> Help</a>\n" +
    "                            </li>\n" +
    "                        </ul>\n" +
    "                    </div>\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"padding-10\">\n" +
    "                    <div id=\"flotcontainer\" class=\"chart-large has-legend-unique\" flot-basic flot-data=\"revenewData\" flot-options=\"revenewDisplayOptions\"></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <!-- end s3 tab pane -->\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- end content -->\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "<!-- end widget div -->\n" +
    "</div>\n" +
    "");
  $templateCache.put("build/layout/layout.tpl.html",
    "<!-- HEADER -->\n" +
    "<div data-smart-include=\"build/layout/partials/header.tpl.html\" class=\"placeholder-header\"></div>\n" +
    "<!-- END HEADER -->\n" +
    "\n" +
    "\n" +
    "<!-- Left panel : Navigation area -->\n" +
    "<!-- Note: This width of the aside area can be adjusted through LESS variables -->\n" +
    "<div data-smart-include=\"build/layout/partials/navigation.tpl.html\" class=\"placeholder-left-panel\"></div>\n" +
    "\n" +
    "<!-- END NAVIGATION -->\n" +
    "\n" +
    "<!-- MAIN PANEL -->\n" +
    "<div id=\"main\" role=\"main\">\n" +
    "\n" +
    "    <!-- RIBBON -->\n" +
    "    <div id=\"ribbon\">\n" +
    "\n" +
    "        <!-- breadcrumb -->\n" +
    "        <state-breadcrumbs></state-breadcrumbs>\n" +
    "        <!-- end breadcrumb -->\n" +
    "\n" +
    "    </div>\n" +
    "    <!-- END RIBBON -->\n" +
    "\n" +
    "\n" +
    "    <div data-smart-router-animation-wrap=\"content content@app\" data-wrap-for=\"#content\">\n" +
    "        <div data-ui-view=\"content\" data-autoscroll=\"false\"></div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "<!-- END MAIN PANEL -->\n" +
    "\n" +
    "<!-- PAGE FOOTER -->\n" +
    "<div data-smart-include=\"build/layout/partials/footer.tpl.html\"></div>\n" +
    "\n" +
    "<!-- END PAGE FOOTER -->\n" +
    "\n" +
    "\n" +
    "");
  $templateCache.put("build/layout/partials/footer.tpl.html",
    "<div class=\"page-footer\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-xs-12 col-sm-6\">\n" +
    "            <span class=\"txt-color-white\">SmartAdmin WebApp © 2013-2014</span>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"col-xs-6 col-sm-6 text-right hidden-xs\">\n" +
    "            <div class=\"txt-color-white inline-block\">\n" +
    "                <i class=\"txt-color-blueLight hidden-mobile\">Last account activity <i class=\"fa fa-clock-o\"></i>\n" +
    "                    <strong>52 mins ago &nbsp;</strong> </i>\n" +
    "\n" +
    "                <div class=\"btn-group dropup\">\n" +
    "                    <button class=\"btn btn-xs dropdown-toggle bg-color-blue txt-color-white\" data-toggle=\"dropdown\">\n" +
    "                        <i class=\"fa fa-link\"></i> <span class=\"caret\"></span>\n" +
    "                    </button>\n" +
    "                    <ul class=\"dropdown-menu pull-right text-left\">\n" +
    "                        <li>\n" +
    "                            <div class=\"padding-5\">\n" +
    "                                <p class=\"txt-color-darken font-sm no-margin\">Download Progress</p>\n" +
    "\n" +
    "                                <div class=\"progress progress-micro no-margin\">\n" +
    "                                    <div class=\"progress-bar progress-bar-success\" style=\"width: 50%;\"></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </li>\n" +
    "                        <li class=\"divider\"></li>\n" +
    "                        <li>\n" +
    "                            <div class=\"padding-5\">\n" +
    "                                <p class=\"txt-color-darken font-sm no-margin\">Server Load</p>\n" +
    "\n" +
    "                                <div class=\"progress progress-micro no-margin\">\n" +
    "                                    <div class=\"progress-bar progress-bar-success\" style=\"width: 20%;\"></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </li>\n" +
    "                        <li class=\"divider\"></li>\n" +
    "                        <li>\n" +
    "                            <div class=\"padding-5\">\n" +
    "                                <p class=\"txt-color-darken font-sm no-margin\">Memory Load <span class=\"text-danger\">*critical*</span>\n" +
    "                                </p>\n" +
    "\n" +
    "                                <div class=\"progress progress-micro no-margin\">\n" +
    "                                    <div class=\"progress-bar progress-bar-danger\" style=\"width: 70%;\"></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </li>\n" +
    "                        <li class=\"divider\"></li>\n" +
    "                        <li>\n" +
    "                            <div class=\"padding-5\">\n" +
    "                                <button class=\"btn btn-block btn-default\">refresh</button>\n" +
    "                            </div>\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
  $templateCache.put("build/layout/partials/header.tpl.html",
    "<header id=\"header\">\n" +
    "<div id=\"logo-group\">\n" +
    "\n" +
    "    <!-- PLACE YOUR LOGO HERE -->\n" +
    "    <span id=\"logo\"> <img src=\"styles/img/logo.png\" alt=\"SmartAdmin\"> </span>\n" +
    "    <!-- END LOGO PLACEHOLDER -->\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<!-- pulled right: nav area -->\n" +
    "<div class=\"pull-right\">\n" +
    "\n" +
    "    <!-- collapse menu button -->\n" +
    "    <div id=\"hide-menu\" class=\"btn-header pull-right\">\n" +
    "        <span> <a toggle-menu title=\"Collapse Menu\"><i\n" +
    "                class=\"fa fa-reorder\"></i></a> </span>\n" +
    "    </div>\n" +
    "    <!-- end collapse menu -->\n" +
    "\n" +
    "    <!-- #MOBILE -->\n" +
    "\n" +
    "    <!-- logout button -->\n" +
    "    <div id=\"logout\" class=\"btn-header transparent pull-right\">\n" +
    "        <span> <a ui-sref=\"login\" title=\"Sign Out\" data-action=\"userLogout\"\n" +
    "                  data-logout-msg=\"You can improve your security further after logging out by closing this opened browser\"><i\n" +
    "                class=\"fa fa-sign-out\"></i></a> </span>\n" +
    "    </div>\n" +
    "    <!-- end logout button -->\n" +
    "\n" +
    "    <!-- fullscreen button -->\n" +
    "    <div id=\"fullscreen\" class=\"btn-header transparent pull-right\">\n" +
    "        <span> <a full-screen title=\"Full Screen\"><i\n" +
    "                class=\"fa fa-arrows-alt\"></i></a> </span>\n" +
    "    </div>\n" +
    "    <!-- end fullscreen button -->\n" +
    "\n" +
    "    <!-- #Voice Command: Start Speech -->\n" +
    "    <div id=\"speech-btn\" class=\"btn-header transparent pull-right hidden-sm hidden-xs\">\n" +
    "        <div>\n" +
    "            <a title=\"Voice Command\" id=\"voice-command-btn\" speech-recognition><i class=\"fa fa-microphone\"></i></a>\n" +
    "\n" +
    "            <div class=\"popover bottom\">\n" +
    "                <div class=\"arrow\"></div>\n" +
    "                <div class=\"popover-content\">\n" +
    "                    <h4 class=\"vc-title\">Voice command activated <br>\n" +
    "                        <small>Please speak clearly into the mic</small>\n" +
    "                    </h4>\n" +
    "                    <h4 class=\"vc-title-error text-center\">\n" +
    "                        <i class=\"fa fa-microphone-slash\"></i> Voice command failed\n" +
    "                        <br>\n" +
    "                        <small class=\"txt-color-red\">Must <strong>\"Allow\"</strong> Microphone</small>\n" +
    "                        <br>\n" +
    "                        <small class=\"txt-color-red\">Must have <strong>Internet Connection</strong></small>\n" +
    "                    </h4>\n" +
    "                    <a href-void class=\"btn btn-success\" id=\"speech-help-btn\">See Commands</a>\n" +
    "                    <a href-void class=\"btn bg-color-purple txt-color-white\"\n" +
    "                       onclick=\"$('#speech-btn .popover').fadeOut(50);\">Close Popup</a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!-- end voice command -->\n" +
    "\n" +
    "\n" +
    "\n" +
    "    <!-- multiple lang dropdown : find all flags in the flags page -->\n" +
    "    <language-selector></language-selector>\n" +
    "    <!-- end multiple lang -->\n" +
    "\n" +
    "</div>\n" +
    "<!-- end pulled right: nav area -->\n" +
    "\n" +
    "</header>\n" +
    "");
  $templateCache.put("build/layout/partials/navigation.tpl.html",
    "<aside id=\"left-panel\">\n" +
    "\n" +
    "    <!-- User info -->\n" +
    "    <div login-info></div>\n" +
    "    <!-- end user info -->\n" +
    "\n" +
    "    <!-- NAVIGATION : This navigation is also responsive\n" +
    "\n" +
    "    To make this navigation dynamic please make sure to link the node\n" +
    "    (the reference to the nav > ul) after page load. Or the navigation\n" +
    "    will not initialize.\n" +
    "    -->\n" +
    "    <nav>\n" +
    "        <!-- NOTE: Notice the gaps after each icon usage <i></i>..\n" +
    "        Please note that these links work a bit different than\n" +
    "        traditional href=\"\" links. See documentation for details.\n" +
    "        -->\n" +
    "\n" +
    "        <ul data-smart-menu>\n" +
    "            <li data-ui-sref-active=\"active\">\n" +
    "                <a data-ui-sref=\"app.dashboard\" title=\"Dashboard\"><i class=\"fa fa-lg fa-fw fa-home\"></i> <span\n" +
    "                        class=\"menu-item-parent\">{{getWord('Dashboard')}}</span></a>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </nav>\n" +
    "\n" +
    "  <span class=\"minifyme\" data-action=\"minifyMenu\" minify-menu>\n" +
    "    <i class=\"fa fa-arrow-circle-left hit\"></i>\n" +
    "  </span>\n" +
    "\n" +
    "</aside>\n" +
    "");
  $templateCache.put("build/layout/partials/sub-header.tpl.html",
    "<div class=\"col-xs-12 col-sm-5 col-md-5 col-lg-8\" data-sparkline-container>\n" +
    "    <ul id=\"sparks\" class=\"\">\n" +
    "        <li class=\"sparks-info\">\n" +
    "            <h5> My Income <span class=\"txt-color-blue\">$47,171</span></h5>\n" +
    "            <div class=\"sparkline txt-color-blue hidden-mobile hidden-md hidden-sm\">\n" +
    "                1300, 1877, 2500, 2577, 2000, 2100, 3000, 2700, 3631, 2471, 2700, 3631, 2471\n" +
    "            </div>\n" +
    "        </li>\n" +
    "        <li class=\"sparks-info\">\n" +
    "            <h5> Site Traffic <span class=\"txt-color-purple\"><i class=\"fa fa-arrow-circle-up\"></i>&nbsp;45%</span></h5>\n" +
    "            <div class=\"sparkline txt-color-purple hidden-mobile hidden-md hidden-sm\">\n" +
    "                110,150,300,130,400,240,220,310,220,300, 270, 210\n" +
    "            </div>\n" +
    "        </li>\n" +
    "        <li class=\"sparks-info\">\n" +
    "            <h5> Site Orders <span class=\"txt-color-greenDark\"><i class=\"fa fa-shopping-cart\"></i>&nbsp;2447</span></h5>\n" +
    "            <div class=\"sparkline txt-color-greenDark hidden-mobile hidden-md hidden-sm\">\n" +
    "                110,150,300,130,400,240,220,310,220,300, 270, 210\n" +
    "            </div>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>\n" +
    "			");
  $templateCache.put("build/layout/partials/voice-commands.tpl.html",
    "<!-- TRIGGER BUTTON:\n" +
    "<a href=\"/my-ajax-page.html\" data-toggle=\"modal\" data-target=\"#remoteModal\" class=\"btn btn-default\">Open Modal</a>  -->\n" +
    "\n" +
    "<!-- MODAL PLACE HOLDER\n" +
    "<div class=\"modal fade\" id=\"remoteModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"remoteModalLabel\" aria-hidden=\"true\">\n" +
    "<div class=\"modal-dialog\">\n" +
    "<div class=\"modal-content\"></div>\n" +
    "</div>\n" +
    "</div>   -->\n" +
    "<!--////////////////////////////////////-->\n" +
    "\n" +
    "<!--<div class=\"modal-header\">\n" +
    "<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n" +
    "&times;\n" +
    "</button>\n" +
    "<h4 class=\"modal-title\" id=\"myModalLabel\">Command List</h4>\n" +
    "</div>-->\n" +
    "<div class=\"modal-body\">\n" +
    "\n" +
    "	<h1><i class=\"fa fa-microphone text-muted\"></i>&nbsp;&nbsp; SmartAdmin Voice Command</h1>\n" +
    "	<hr class=\"simple\">\n" +
    "	<h5>Instruction</h5>\n" +
    "\n" +
    "	Click <span class=\"text-success\">\"Allow\"</span> to access your microphone and activate Voice Command.\n" +
    "	You will notice a <span class=\"text-primary\"><strong>BLUE</strong> Flash</span> on the microphone icon indicating activation.\n" +
    "	The icon will appear <span class=\"text-danger\"><strong>RED</strong></span> <span class=\"label label-danger\"><i class=\"fa fa-microphone fa-lg\"></i></span> if you <span class=\"text-danger\">\"Deny\"</span> access or don't have any microphone installed.\n" +
    "	<br>\n" +
    "	<br>\n" +
    "	As a security precaution, your browser will disconnect the microphone every 60 to 120 seconds (sooner if not being used). In which case Voice Command will prompt you again to <span class=\"text-success\">\"Allow\"</span> or <span class=\"text-danger\">\"Deny\"</span> access to your microphone.\n" +
    "	<br>\n" +
    "	<br>\n" +
    "	If you host your page over <strong>http<span class=\"text-success\">s</span></strong> (secure socket layer) protocol you can wave this security measure and have an unintrupted Voice Command.\n" +
    "	<br>\n" +
    "	<br>\n" +
    "	<h5>Commands</h5>\n" +
    "	<ul>\n" +
    "		<li>\n" +
    "			<strong>'show' </strong> then say the <strong>*page*</strong> you want to go to. For example <strong>\"show inbox\"</strong> or <strong>\"show calendar\"</strong>\n" +
    "		</li>\n" +
    "		<li>\n" +
    "			<strong>'mute' </strong> - mutes all sound effects for the theme.\n" +
    "		</li>\n" +
    "		<li>\n" +
    "			<strong>'sound on'</strong> - unmutes all sound effects for the theme.\n" +
    "		</li>\n" +
    "		<li>\n" +
    "			<span class=\"text-danger\"><strong>'stop'</strong></span> - deactivates voice command.\n" +
    "		</li>\n" +
    "		<li>\n" +
    "			<span class=\"text-primary\"><strong>'help'</strong></span> - brings up the command list\n" +
    "		</li>\n" +
    "		<li>\n" +
    "			<span class=\"text-danger\"><strong>'got it'</strong></span> - closes help modal\n" +
    "		</li>\n" +
    "		<li>\n" +
    "			<strong>'hide navigation'</strong> - toggle navigation collapse\n" +
    "		</li>\n" +
    "		<li>\n" +
    "			<strong>'show navigation'</strong> - toggle navigation to open (can be used again to close)\n" +
    "		</li>\n" +
    "		<li>\n" +
    "			<strong>'scroll up'</strong> - scrolls to the top of the page\n" +
    "		</li>\n" +
    "		<li>\n" +
    "			<strong>'scroll down'</strong> - scrollts to the bottom of the page\n" +
    "		</li>\n" +
    "		<li>\n" +
    "			<strong>'go back' </strong> - goes back in history (history -1 click)\n" +
    "		</li>\n" +
    "		<li>\n" +
    "			<strong>'logout'</strong> - logs you out\n" +
    "		</li>\n" +
    "	</ul>\n" +
    "	<br>\n" +
    "	<h5>Adding your own commands</h5>\n" +
    "	Voice Command supports up to 80 languages. Adding your own commands is extreamly easy. All commands are stored inside <strong>app.config.js</strong> file under the <code>var commands = {...}</code>. \n" +
    "\n" +
    "	<hr class=\"simple\">\n" +
    "	<div class=\"text-right\">\n" +
    "		<button type=\"button\" class=\"btn btn-success btn-lg\" data-dismiss=\"modal\">\n" +
    "			Got it!\n" +
    "		</button>\n" +
    "	</div>\n" +
    "\n" +
    "</div>\n" +
    "<!--<div class=\"modal-footer\">\n" +
    "<button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Got it!</button>\n" +
    "</div> -->");
}]);
});
define('includes',[
    // account
    'auth/module',
    'auth/models/User',

    // layout

    'layout/module',
    'layout/actions/minifyMenu',
    'layout/actions/toggleMenu',
    'layout/actions/fullScreen',
    'layout/actions/resetWidgets',
    'layout/actions/resetWidgets',
    'layout/actions/searchMobile',
    'layout/directives/smartInclude',
    'layout/directives/smartDeviceDetect',
    'layout/directives/smartFastClick',
    'layout/directives/smartLayout',
    'layout/directives/smartSpeech',
    'layout/directives/smartRouterAnimationWrap',
    'layout/directives/smartFitAppView',
    'layout/directives/radioToggle',
    'layout/directives/dismisser',
    'layout/directives/smartMenu',
    'layout/directives/bigBreadcrumbs',
    'layout/directives/stateBreadcrumbs',
    'layout/directives/smartPageTitle',
    'layout/directives/hrefVoid',
    'layout/service/SmartCss',

    // dashboard
    'dashboard/module',

    //components
    'components/language/Language',
    'components/language/languageSelector',
    'components/language/language-controller'

,"smart-templates"], function () {
    
});

// Defer AngularJS bootstrap
window.name = "NG_DEFER_BOOTSTRAP!";

define('main',[
    'require',
    'jquery',
    'angular',
    'domReady',

    //'pace',
    'bootstrap',
    'appConfig',
    'app',
    'includes'
], function (require, $, ng, domReady) {
    

    $.sound_path = appConfig.sound_path;
    $.sound_on = appConfig.sound_on;


    domReady(function (document) {
        ng.bootstrap(document, ['app']);
        ng.resumeBootstrap();
    });
});

