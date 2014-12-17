var requirejsCompileSkip = require('./tasks/requirejs-compile-skip.json');

var pkg = require('./package.json');

var pub = pkg.smartadmin.public;
var tmp = pkg.smartadmin.temp;
var bld = pkg.smartadmin.build;
var rails = pkg.smartadmin.rails;

module.exports = function (grunt) {


    // Project configuration.
    grunt.initConfig({

        turnOffPotatoDeclaration: {
            tmp: {
                expand: true,
                src: [
                    tmp + '*/**/*.js',
                    tmp + 'app.js'
                ]
            }
        },
        /**
         * `grunt coffee` compiles the CoffeeScript sources. To work well with the
         * rest of the build, we have a separate compilation task for sources and
         * specs so they can go to different places. For example, we need the
         * sources to live with the rest of the copied JavaScript so we can include
         * it in the final build, but we don't want to include our specs there.
         */
        coffee: {
          source: {
            options: {
              bare: true
            },
            expand: true,
            cwd: '.',
            src: [ pub +  '/app/**/*.coffee', '!' + pub + '/app/**/*.spec.coffee' ],
            dest: tmp,
            ext: '.js'
          }
        },
        ngAnnotate: {
            tmp: {
                expand: true,
                src: [
                    tmp + '*/**/*.js',
                    tmp + 'app.js'
                ],
                ext: '.js', // Dest filepaths will have this extension.
                extDot: 'last'
            }
        },
        turnOnPotatoDeclaration: {
            tmp: {
                expand: true,
                src: [
                    tmp + '*/**/*.js',
                    tmp + 'app.js'
                ]
            }
        },
        adjustTemplateUrls: {
            tmp: {
                options: {
                    from: 'app',
                    to: 'build'
                },
                expand: true,
                src: [
                    tmp + '*/**/*.*',
                    tmp + 'app.js'
                ]
            }
        },
        html2js: {
            options: {
                base: tmp,
                module: 'smart-templates',
                singleModule: true,
                rename: function (moduleName) {
                    return 'build/' + moduleName;
                }
            },
            main: {
                src: [tmp + '**/*.tpl.html'],
                dest: tmp + 'smart-templates.js'
            }
        },
        addIncludes:{
            options:{
                appFile: tmp + 'app.js',
                includesFile: tmp + 'includes.js'
            },
            templates:{
                options:{
                    angularModule: true,
                    wrapToDefine: true,
                    name: 'smart-templates',
                    injectToApp: true
                },
                src: [
                    tmp + 'smart-templates.js'
                ]

            }

        },
        uglify: {
            tmp: {
                expand: true,
                cwd: tmp,
                src: [
                    '**/*.js'
                ],
                dest: tmp,
                ext: '.js'
            }
        },

        clean: {
            pre: {
                options: {
                    force: true
                },
                src: [
                    bld,
                    tmp
                ]
            },
            post: {
                options: {
                    force: true
                },
                src: [
                    tmp
                ]
            },
            rails: {
                options: { force: true },
                src: [
                  rails + 'index.html',
                  rails + 'build/',
                  rails + 'sound/',
                  rails + 'vendor/',
                  rails + 'api/',
                  rails + 'styles/',
                  rails + 'plugin/',
                  rails + 'smartadmin-plugin/'
                ]
            }
        },
        copy: {
            pre: {
                expand: true,
                cwd: pub + 'app/',
                src: [
                    '**'
                ],
                dest: tmp
            },
            post: {
                expand: true,
                cwd: tmp,
                src: [
                    '*/**',
                    'rconfig.js',
                    '!**/*.tpl.html'
                ],
                dest: bld
            },
            rails: {
                expand: true,
                cwd: pub,
                src: [
                  'index.html',
                  'build/**/*',
                  'sound/**/*',
                  'vendor/**/*',
                  'api/**/*',
                  'styles/**/*',
                  'plugin/**/*',
                  'smartadmin-plugin/**/*'
                ],
                dest: rails
            }
        },
        requirejs: {
            compile: {
                options: {
                    baseUrl: tmp,
                    paths: requirejsCompileSkip,
                    mainConfigFile: tmp + 'rconfig.js',
                    name: "main",
                    optimize: 'none',
                    uglify2: {
                        mangle: false
                    },
                    out: bld + 'main.js',
                    done: function (done, output) {
                        console.log('done requirejs');
                        done();
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.loadNpmTasks('grunt-ng-annotate');

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.loadNpmTasks('grunt-contrib-coffee');       // CarmineM74

    grunt.loadNpmTasks('grunt-html2js');

    grunt.loadTasks('tasks');


    grunt.registerTask('default', [
        'clean:pre',
        'clean:rails',                    // CarmineM74
        'copy:pre',
        'turnOffPotatoDeclaration',
        'ngAnnotate:tmp',
        'turnOnPotatoDeclaration',
        'adjustTemplateUrls',
        'html2js',
        'addIncludes',
        'coffee',                         // CarmineM74
        'uglify',
        'requirejs',
        'copy:post',
        'clean:post',
        'copy:rails'                      // CarmineM74
    ]);

    grunt.registerTask('vtp', [
        'vendor-to-plugin',
        'default'
    ]);



};
