/// <reference path="../../typings/main.d.ts" />

import Application from './lib/classes/Application';

/**
 * The main file, the app, the entry point of the application.
 * Starts the router, handles routes, runs bootstrap etc.
 * @name app
 */
const application : Application = new Application();

application.start();

export default application;
