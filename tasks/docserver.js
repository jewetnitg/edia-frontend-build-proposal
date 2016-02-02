var connect = require('gulp-connect');
var watch = require('gulp-watch');

module.exports = function (gulp) {
  /**
   * Starts the docserver that serves the generated documentation, triggers livereload when files in the ./build/docs directory change
   * @name docserver
   * @memberof build.tasks
   */
  gulp.task('docserver', function () {
    connect.server({
      root: './build/docs',
      port: 9001,
      livereload: true
    });

    watch('./build/docs/**/*.*')
      .pipe(connect.reload());
  });
};
