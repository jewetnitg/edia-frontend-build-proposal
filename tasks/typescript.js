var ts = require('gulp-typescript');

module.exports = function (gulp) {
  gulp.task('typescript', function () {
    return gulp.src('./src/**/*.ts')
      .pipe(ts({
        noImplicitAny: true,
        out: 'bundle.js'
      }))
      .pipe(gulp.dest('build/dst/'));
  });

};
