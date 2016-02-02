var connect = require('gulp-connect');
var watch = require('gulp-watch');
// @todo add reverse proxy for backend

module.exports = function (gulp) {
  /**
   * Starts the devserver that serves the built project, triggers livereload when files in the ./build/dst directory change
   * @name devserver
   * @memberof build.tasks
   */
  gulp.task('devserver', function () {
    connect.server({
      root: './build/dst',
      port: 9000,
      livereload: true
    });

    watch('./build/dst/**/*.*')
      .pipe(connect.reload());
  });
};
