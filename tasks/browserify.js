// @todo add browserify-istanbul for coverage
// @todo add uglify / minify
// @todo TBD: do we want babel for transpiling and polyfills

var watchify = require('watchify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var istanbul = require('browserify-istanbul');
var _ = require('lodash');

module.exports = function (gulp) {
  gulp.task('browserify', function () {
    // options for browserify
    var options = {
      entries: ['./standalone.js'],
      debug: true
    };
    var opts = _.extend({}, watchify.args, options);
    var bundler = watchify(browserify(opts));

    function bundle() {
      return bundler.bundle()
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(source('main.js')) // output filename
        .pipe(buffer())
        .pipe(
          sourcemaps.init({
            loadMaps: true // loads map from browserify file, this needs browserify's debug option to be set to true
          })
        )

        // Add gulp transforms here

        .pipe(sourcemaps.write('./')) // output sourcemap filename
        .pipe(gulp.dest('./build/dst')); // output directory
    }

    // add browserify transforms here
    // i.e. bundler.transform(babel);
    bundler.transform(istanbul);

    bundler.on('update', bundle); // re-bundles the application when any of the (javascript (!!)) source files change
    bundler.on('log', gutil.log); // output build logs to terminal

    // bundle the project
    bundle();
  });
};
