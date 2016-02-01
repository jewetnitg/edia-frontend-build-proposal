var connect = require('gulp-connect');

// @todo add reverse proxy for backend

module.exports = function (gulp) {
  gulp.task('devserver', function () {
    connect.server({
      root: './build/dst',
      port: 9000,
      livereload: true
    });
  });
};
