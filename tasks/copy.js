module.exports = function (gulp) {
  /**
   * Copies static assets to the build directory
   * @name copy
   * @memberof build.tasks
   */
  gulp.task('copy', function () {
    return gulp.src(['./src/**/**.!(js|ts|less|sass)'])
      .pipe(gulp.dest('build/dst'));
  });
};