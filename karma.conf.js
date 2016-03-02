var argv = require('yargs')
  .boolean('y')
  .alias('y', 'singleRun')
  .argv;

var singleRun = argv.y;

module.exports = function (config) {
  var options = {
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    // @todo add mocking framework, either sinon-chai or jsmockito-jshamcrest (or something else?)
    frameworks: ['mocha', 'browserify', 'chai'],

    // list of files / patterns to load in the browser
    files: [
      'test/**/*.spec.ts'
    ],

    // list of files to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      './test/**.spec.ts': ['browserify']
    },

    browserify: {
      debug: true,
      plugin: ['tsify'],
      transform: [require('browserify-istanbul')]
    },

    typescriptPreprocessor: {
      // options passed to the typescript compiler
      options: {
        sourceMap: false, // (optional) Generates corresponding .map file.
        target: 'ES5', // (optional) Specify ECMAScript target version: 'ES3' (default), or 'ES5'
        module: 'amd', // (optional) Specify module code generation: 'commonjs' or 'amd'
        noImplicitAny: true, // (optional) Warn on expressions and declarations with an implied 'any' type.
        noResolve: true, // (optional) Skip resolution and preprocessing.
        removeComments: true, // (optional) Do not emit comments to output.
        concatenateOutput: false // (optional) Concatenate and emit output to single file. By default true if module option is omited, otherwise false.
      },
      // extra typing definitions to pass to the compiler (globs allowed)
      typings: [
        'typings/tsd.d.ts'
      ],
      // transforming the filenames
      transformPath: function(path) {
        return path.replace(/\.ts$/, '.js');
      }
    },

    plugins: [
      // preprocessors
      'karma-typescript-preprocessor',

      // reporters
      'karma-spec-reporter',
      'karma-html-reporter',
      'karma-junit-reporter',

      // coverage
      'karma-coverage',

      // browserify
      'karma-browserify',

      // launchers
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-firefox-launcher',

      // frameworks / libraries
      'karma-mocha',
      'karma-chai'
    ],

    htmlReporter: {
      outputDir: './build', // where to put the reports
      templatePath: null, // set if you moved jasmine_template.html
      focusOnFailures: true, // reports show failures on start
      namedFiles: false, // name files instead of creating sub-directories
      pageTitle: null, // page title for reports; browser info by default
      urlFriendlyName: false, // simply replaces spaces with _ for files/dirs
      reportName: 'test-summary', // report summary filename; browser info by default

      // experimental
      preserveDescribeNesting: false // folded suites stay folded
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: [
      'spec',
      'html',
      'coverage',
      'junit'
    ],

    coverageReporter: {
      dir: './build/coverage',
      reporters: [
        {
          type: 'json',
          file: 'coverage.json'
        }
      ]
    },

    junitReporter: {
      outputDir: './build/junit',
      outputFile: 'test-results.xml'
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [
      'PhantomJS',
      'ChromeSmall',
      'FirefoxSmall'
    ],

    customLaunchers: {
      ChromeSmall: {
        base: 'Chrome',
        flags: ['--window-size=300,300']
      },
      FirefoxSmall: {
        base: 'Firefox',
        flags: ['--window-size=300,300']
      }
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: singleRun
  };

  config.set(options);

  return options;
};
