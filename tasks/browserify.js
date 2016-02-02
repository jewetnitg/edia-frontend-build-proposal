// @todo TBD: do we want babel for transpiling and polyfills

var watchify   = require('watchify');
var browserify = require('browserify');
var source     = require('vinyl-source-stream');
var buffer     = require('vinyl-buffer');
var gutil      = require('gulp-util');
var uglify     = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

module.exports = function (gulp) {

  /**
   * Browserifies the project and uglifies, watches for any source changes and re-bundles them when they occur.
   * @name browserify:prod
   * @memberof build.tasks
   */
  gulp.task('browserify:prod', function () {
    doBrowserify('prod');
  });

  /**
   * Browserifies the project and generates sourcemaps, watches for any source changes and re-bundles them when they occur.
   * @name browserify:dev
   * @memberof build.tasks
   */
  gulp.task('browserify:dev', function () {
    doBrowserify('dev');
  });

  var options = {
    entries: './src/js/main.js',
  };

  function sharedBrowserifyTransforms (bundler) {
    // add shared browserify transforms here
    // i.e. bundler.transform(babel);
  }

  function prodBrowserifyTransforms (bundler) {
    // add prod specific browserify transforms here
    // i.e. bundler.transform(babel);
  }

  function devBrowserifyTransforms (bundler) {
    // add dev specific browserify transforms here
    // i.e. bundler.transform(babel);
  }

  function sharedGulpTransforms (bundle) {
    // add shared gulp transform here
    // i.e. bundler.pipe(uglify())
  }

  function prodGulpTransforms (bundle) {
    // only uglify for prod, so we keep variable names while developing
    return bundle.pipe(uglify());
  }

  function devGulpTransforms (bundle) {
    return bundle.pipe(
      sourcemaps.init({
        loadMaps: true // loads map from browserify file
      })
    );
  }

  function doBrowserify (env) {
    // needed for sourcemaps
    options.debug = env === 'dev';

    var bundler = watchify(browserify(options));

    function bundle () {
      var bundle = bundler.bundle();

      bundle = bundle.on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(source('main.js')) // output filename
        .pipe(buffer());

      bundle = sharedGulpTransforms(bundle) || bundle;

      if (env === 'prod') {
        bundle = prodGulpTransforms(bundle) || bundle;
      } else if (env === 'dev') {
        bundle = devGulpTransforms(bundle) || bundle;
      }

      return bundle.pipe(sourcemaps.write('./')) // sourcemap directory
        .pipe(gulp.dest('./build/dst/js')); // output dir
    }

    sharedBrowserifyTransforms();

    if (env === 'prod') {
      prodBrowserifyTransforms(bundler);
    } else if (env === 'dev') {
      devBrowserifyTransforms(bundler);
    }

    bundler.on('update', bundle); // re-bundles the application when any of the (javascript (!!)) source files change
    bundler.on('log', gutil.log); // output build logs to terminal

    // bundle the project
    bundle();
  }

};
