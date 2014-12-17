var defaultMap;

defaultMap = {
  zoom: 12,
  center: {
    longitude: 47,
    latitude: -27
  }
};

window["uiGmapInitiator"] = {
  initDirective: function(toInit, apiSubjectClassName, thingsToInit, map) {
    var injects;
    if (thingsToInit == null) {
      thingsToInit = ['initAll'];
    }
    if (map == null) {
      map = defaultMap;
    }
    injects = ['$compile', '$rootScope', '$timeout', 'Logger'.ns()];
    if (apiSubjectClassName != null) {
      injects.push(apiSubjectClassName.ns());
    }
    module("google-maps.mocks".ns());
    inject(function(GoogleApiMock) {
      toInit.apiMock = new GoogleApiMock();
      return thingsToInit.forEach(function(init) {
        return toInit.apiMock[init]();
      });
    });
    injects.push(function($compile, $rootScope, $timeout, Logger, SubjectClass) {
      toInit.compile = $compile;
      toInit.rootScope = $rootScope;
      if (SubjectClass != null) {
        toInit.subject = new SubjectClass();
      }
      toInit.log = Logger;
      toInit.scope = toInit.rootScope.$new();
      return toInit.scope.map = map;
    });
    inject(injects);
    spyOn(toInit.log, 'error');
    return toInit;
  },
  initMock: function() {
    var apiMock, app;
    app = module("google-maps.mocks".ns());
    module("google-maps.directives.api.utils".ns());
    apiMock = void 0;
    inject([
      'GoogleApiMock', (function(_this) {
        return function(GoogleApiMock) {
          apiMock = new GoogleApiMock();
          return apiMock.initAll();
        };
      })(this)
    ]);
    return {
      app: app,
      apiMock: apiMock
    };
  }
};
