/// <reference path="../../typings/main.d.ts" />

// for modules with no default export
import * as _ from 'lodash';
import bootstrap from './config/bootstrap';

/**
 * The main file, the app, the entry point of the application.
 * Starts the router, handles routes, runs bootstrap etc.
 * @name app
 * @type Object
 */
var app = {
  /**
   * Starts the application
   */
  start() : Promise {
    return bootstrap();
  }
};

app.start();

export default app;