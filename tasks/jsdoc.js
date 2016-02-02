var shell = require("gulp-shell");

module.exports = function (gulp, plugins) {

  /**
   * Generates documentation using the local jsdoc binary.
   * @name jsdoc
   * @memberof build.tasks
   */
  gulp.task('jsdoc', shell.task('./node_modules/.bin/jsdoc -c ./jsdoc.config.json'));

  /**
   * Generates documentation using the local jsdoc binary, watches for changes, and re-generates documentation when any of the files change.
   * @name jsdoc:watch
   * @memberof build.tasks
   */
  gulp.task('jsdoc:watch', ['jsdoc'], function (cb) {
    // we don't have to wait for watchers to be ready to continue gulping
    cb();
    gulp.watch('./(src|docs|tasks)/*.(js|md)', ['jsdoc']);
    gulp.watch('./README.md', ['jsdoc']);
    gulp.watch('./*.js', ['jsdoc']);
  });
};
