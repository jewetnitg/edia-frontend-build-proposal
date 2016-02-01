var gulpLess = require('gulp-less');

module.exports = function (gulp) {
  gulp.task('less', function () {
    return gulp.src('./src/assets/styles/**/*.less')
      .pipe(gulpLess())
      .pipe(gulp.dest('./build/dst/styles'));
  });
};
