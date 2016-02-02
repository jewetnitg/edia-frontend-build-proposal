var eslint = require('gulp-eslint');

module.exports = function (gulp) {
  /**
   * Lints the javascript
   * @name eslint
   * @memberof build.tasks
   */
  gulp.task('eslint', function () {
    return gulp.src(['./src/js/**/*.js'])
      .pipe(eslint())
  });
};
