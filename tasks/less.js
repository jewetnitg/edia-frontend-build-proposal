var gulpLess = require('gulp-less');

module.exports = function (gulp) {
  /**
   * Transpiles less to css and writes it to ./build/dst/styles
   * @name less
   * @memberof build.tasks
   */
  gulp.task('less', function () {
    return gulp.src('./src/styles/**/*.less')
      .pipe(gulpLess())
      .pipe(gulp.dest('./build/dst/styles'));
  });
};
