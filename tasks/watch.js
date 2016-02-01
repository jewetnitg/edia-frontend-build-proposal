module.exports = function (gulp) {
  gulp.task('watch', function () {
    gulp.watch('./src/**/*.(!js)', function () {
      // @todo run less, sass and copy
    });
  });
};
