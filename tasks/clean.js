var del = require('del');

module.exports = function (gulp) {
  /**
   * Cleans the build directory
   * @name clean
   * @memberof build.tasks
   */
  gulp.task('clean', function (cb) {
    return del('./build', cb);
  });
};
