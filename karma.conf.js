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
      'test/**/*.spec.js'
    ],

    // list of files to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/**/*.js': ['coverage'],
      'test/**/*.spec.js': ['browserify']
    },

    browserify: {
      debug: true,
      transform: [require('browserify-istanbul')]
    },

    plugins: [
      'karma-spec-reporter',
      'karma-html-reporter',
      'karma-junit-reporter',
      'karma-coverage',
      'karma-browserify',
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
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
          file: 'lcov.txt',
          type: 'lcovonly'
        },
        {
          file: 'lcov.txt',
          type: 'html'
        },
        {
          file: 'cobertura.txt',
          type: 'cobertura'
        },
        {
          file: 'teamcity.txt',
          type: 'teamcity'
        },
        {
          file: 'table.txt',
          type: 'text'
        },
        {
          file: 'summary.txt',
          type: 'text-summary'
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
