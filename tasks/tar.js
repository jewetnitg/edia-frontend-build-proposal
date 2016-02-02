var tar = require('gulp-tar');
var gzip = require('gulp-gzip');

module.exports = function (gulp) {
  /**
   * Puts all files in ./build/dst in an archive and writes it to ./build/build.tar.gz
   * @name tar
   * @memberof build.tasks
   */
  gulp.task('tar', function () {
    return gulp.src('./build/dst/**')
      .pipe(tar('build.tar'))
      .pipe(gzip())
      .pipe(gulp.dest('./build/'))
  });
};