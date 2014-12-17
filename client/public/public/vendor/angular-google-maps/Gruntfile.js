var log, _;

log = require('util').log;

_ = require('lodash');

module.exports = function(grunt) {
  var allExamples, allExamplesOpen, allExamplesTaskToRun, exampleOpenTasks, listWithQuotes, options, showOpenType;
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-open");
  grunt.loadNpmTasks("grunt-mkdir");
  grunt.loadNpmTasks("grunt-contrib-coffee");
  grunt.loadNpmTasks("grunt-contrib-jasmine");
  grunt.loadNpmTasks("grunt-conventional-changelog");
  grunt.loadNpmTasks("grunt-bump");
  grunt.loadNpmTasks('grunt-replace');
  grunt.loadNpmTasks('grunt-subgrunt');
  options = require('./grunt/options')(grunt);
  allExamples = grunt.file.expand('example/*.html');
  allExamplesOpen = {};
  allExamples.forEach(function(path) {
    var pathValue, root;
    root = path.replace('example/', '').replace('.html', '');
    pathValue = "http://localhost:3100/" + path;
    return allExamplesOpen[root] = {
      path: pathValue
    };
  });
  showOpenType = function(toIterate) {
    if (toIterate == null) {
      toIterate = allExamplesOpen;
    }
    return _(toIterate).each(function(v, k) {
      return log("" + k + " -> " + v.path);
    });
  };
  options.open = _.extend(options.open, allExamplesOpen);
  grunt.initConfig(options);
  grunt.registerTask("default", ["clean:dist", "jshint", "mkdir", "coffee", "concat:libs", "replace", "concat:dist", "copy", "uglify", "jasmine:spec"]);
  grunt.registerTask("fast", ["clean:dist", "jshint", "mkdir", "coffee", "concat:libs", "replace", "concat:dist", "copy", "jasmine:spec"]);
  grunt.registerTask("spec", ["clean:dist", "jshint", "mkdir", "coffee", "concat:libs", "replace", "concat:dist", "copy", "connect:jasmineServer", "open:jasmine", "watch:spec"]);
  grunt.registerTask("coverage", ["clean:dist", "jshint", "mkdir", "coffee", "concat:libs", "replace", "concat:dist", "copy", "uglify", "jasmine:coverage"]);
  grunt.registerTask('default-no-specs', ["clean:dist", "jshint", "mkdir", "coffee", "concat:libs", "replace", "concat:dist", "copy", "uglify"]);
  grunt.registerTask('offline', ['default-no-specs', 'watch:offline']);
  grunt.registerTask('bump-@', ['bump-only', 'default', 'bump-commit']);
  grunt.registerTask('bump-@-minor', ['bump-only:minor', 'default', 'bump-commit']);
  grunt.registerTask('bump-@-major', ['bump-only:major', 'default', 'bump-commit']);
  exampleOpenTasks = [];
  _(allExamplesOpen).each(function(v, key) {
    var basicTask;
    basicTask = "open:" + key;
    grunt.registerTask(key, ["fast", "clean:example", "connect:server", basicTask, "watch:all"]);
    return exampleOpenTasks.push(basicTask);
  });
  allExamplesTaskToRun = ["fast", "clean:example", "connect:server"].concat(exampleOpenTasks).concat(['watch:all']);
  listWithQuotes = function(collection, doLog) {
    var all, last;
    if (doLog == null) {
      doLog = true;
    }
    last = collection.length - 1;
    all = '';
    collection.forEach(function(t, i) {
      return all += i < last ? "'" + t + "'," : "'" + t + "'";
    });
    if (doLog) {
      return log(all);
    }
    return all;
  };
  grunt.registerTask('listExamples', showOpenType);
  grunt.registerTask('listAllOpen', function() {
    return showOpenType(options.open);
  });
  grunt.registerTask('listAllExamplesTasks', function() {
    return listWithQuotes(exampleOpenTasks);
  });
  return grunt.registerTask('allExamples', allExamplesTaskToRun);
};
