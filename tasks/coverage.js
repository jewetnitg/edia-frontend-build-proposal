var remapIstanbul = require('remap-istanbul/lib/gulpRemapIstanbul');

module.exports = function (gulp) {
  gulp.task('coverage', function (cb) {
    // @todo implement if this is worth it, see https://github.com/stijnvn/typescript-browserify-istanbul
    console.warn('not implemented');
    cb();
  });
};