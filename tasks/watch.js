var connect = require('gulp-connect')
var watch = require('gulp-watch');

module.exports = function (gulp, plugins) {
  gulp.task('watch', function () {
    // js changes are handled by the browserify task
    gulp.watch('./src/**/*.!(js)', function () {
      plugins.sequence('less', 'copy')
    });
    watch('./build/dst/**/*.*').pipe(connect.reload());
  });
};
