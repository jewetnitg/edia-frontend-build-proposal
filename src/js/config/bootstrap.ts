/// <reference path="../../../typings/main.d.ts" />

import {Promise} from 'es6-promise';
import IBootstrap from '../lib/interfaces/config/IBootstrap';
import Application from '../lib/classes/Application';

/**
 * Executed when the application starts, this is where you would make some initial request(s) to the server.
 */
const bootstrap : IBootstrap = function(app : Application) : Promise<any> {
  return new Promise((resolve : Function, reject : Function) => {
    console.log('bootstrap!');
    // if you don't resolve this Promise the Application won't start!
    resolve(undefined);
  });
};


export default bootstrap;
