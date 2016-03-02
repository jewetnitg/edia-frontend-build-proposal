/// <reference path="../../../typings/main.d.ts" />
import {Promise} from 'es6-promise';

export default function bootstrap() : Promise<any> {
  return new Promise((resolve, reject) => {
    // if you don't resolve this Promise the Application won't start!
    resolve();
  });
};