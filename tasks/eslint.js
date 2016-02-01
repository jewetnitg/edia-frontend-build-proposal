var eslint = require('gulp-eslint');

module.exports = function (gulp) {
  gulp.task('eslint', function () {
    return gulp.src(['./src/js/**/*.js'])
      .pipe(eslint())
  });
};
