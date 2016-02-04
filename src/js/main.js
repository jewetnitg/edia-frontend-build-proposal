var _ = require('lodash');
var router = require('./lib/singletons/router');
var bootstrap = require('./config/bootstrap');

router.on('error', function (data) {
  console.log('Router error', data);
});

/**
 * The main file, the app, the entry point of the application.
 * Starts the router, handles routes, runs bootstrap etc.
 * @name app
 * @type Object
 */
var app = {
  start: function (cb) {
    bootstrap(function () {
      router.start();

      if (typeof cb === 'function') {
        cb();
      }
    });
  }
};

app.start();

module.exports = app;