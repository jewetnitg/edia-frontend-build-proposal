var connect = require('gulp-connect')

module.exports = function (gulp, plugins) {
  /**
   * Watches for changes in non js files and runs the {@link build.tasks.copy} and {@link build.tasks.less} tasks (in sequence).
   * @name watch
   * @memberof build.tasks
   */
  gulp.task('watch', function () {
    // js changes are handled by the browserify task
    gulp.watch('./src/**/*.!(js)', function () {
      plugins.sequence('copy', 'less')
    });
  });
};
