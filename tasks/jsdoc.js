var shell = require("gulp-shell");

module.exports = function (gulp) {
  /**
   * Generates documentation using the local jsdoc binary.
   * @name jsdoc
   * @memberof build.tasks
   */
  return gulp.task('jsdoc', shell.task('./node_modules/.bin/jsdoc -c ./jsdoc.config.json'));
};
