var shell = require("gulp-shell");

module.exports = function (gulp) {
  /**
   * Generates documentation using the local jsdoc binary.
   * @name jsdoc
   * @memberof build.tasks
   */
  return gulp.task('dependo', shell.task('./node_modules/.bin/dependo src -f cjs -x node_modules > ./build/docs/dependency_graph.html'));
};
