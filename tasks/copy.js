module.exports = function (gulp) {
  gulp.task('copy', function () {
    return gulp.src(['./src/**/**.!(js|less|sass)'])
      .pipe(gulp.dest('build/dst'));
  });
};