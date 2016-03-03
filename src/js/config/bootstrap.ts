/// <reference path="../../../typings/main.d.ts" />

import {Promise} from 'es6-promise';

/**
 * Executed when the application starts, this is where you would make some initial request(s) to the server.
 */
export function bootstrap() : Promise<any> {
  return new Promise((resolve : Function, reject : Function) => {
    console.log('bootstrap!');
    // if you don't resolve this Promise the Application won't start!
    resolve();
  });
};

export default bootstrap;
