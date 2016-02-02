var Server = require('karma').Server;

module.exports = function (gulp) {

  var configFile = __dirname + '/../karma.conf.js';

  /**
   * Runs unit tests once
   * @name test
   * @memberof build.tasks
   */
  gulp.task('test', function (done) {
    startKarmaServer(done, true);
  });

  /**
   * Runs unit tests in ci mode, re-running when files change
   * @name test:ci
   * @memberof build.tasks
   */
  gulp.task('test:ci', function (done) {
    startKarmaServer(done);
  });

  function startKarmaServer(done, singleRun) {
    new Server({
      configFile: configFile,
      singleRun: singleRun || false
    }, done).start();
  }

};