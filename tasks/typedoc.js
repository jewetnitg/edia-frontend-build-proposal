var typedoc = require('gulp-typedoc');

module.exports = function (gulp) {
  gulp.task('typedoc', function () {
    return gulp
      .src(["src/**/*.ts"])
      .pipe(typedoc({
        module: "commonjs",
        target: "es5",
        out: "build/docs/",
        name: "edia-frontend-typescript"
      }))
  });
};
