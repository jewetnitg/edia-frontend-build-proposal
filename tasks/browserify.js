// @todo TBD: do we want babel for transpiling and polyfills

var watchify   = require('watchify');
var browserify = require('browserify');
var source     = require('vinyl-source-stream');
var buffer     = require('vinyl-buffer');
var gutil      = require('gulp-util');
var uglify     = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

module.exports = function (gulp) {
  gulp.task('browserify:prod', function () {
    doBrowserify('env');
  });

  gulp.task('browserify:dev', function () {
    doBrowserify('dev');
  });

  function doBrowserify (env) {
// options for browserify
    var options = {
      entries: './src/js/main.js',
      //  needed for sourcemaps
      debug  : true
    };
    var bundler = watchify(browserify(options));

    function bundle () {
      var bundle = bundler.bundle();

      bundle = bundle.on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(source('main.js')) // output filename
        .pipe(buffer())
        .pipe(
          sourcemaps.init({
            loadMaps: true // loads map from browserify file
          })
        );

      if (env === 'prod') {
        // only minify for prod, so we keep variable names while developing
        bundle = bundle.pipe(uglify())
      }

      // Add gulp transforms here

      return bundle.pipe(sourcemaps.write('./')) // sourcemap directory
        .pipe(gulp.dest('./build/dst/js')); // output dir
    }

    // add browserify transforms here
    // i.e. bundler.transform(babel);

    bundler.on('update', bundle); // re-bundles the application when any of the (javascript (!!)) source files change
    bundler.on('log', gutil.log); // output build logs to terminal

    // bundle the project
    bundle();
  }

};
