/// <reference path="../../../../typings/main.d.ts" />

import {Promise} from 'es6-promise';
import bootstrap from '../../config/bootstrap';

import IApplication from '../interfaces/IApplication.ts';

export class Application implements IApplication {

  public start() : Promise<any> {
    return bootstrap();
  }

  public stop() : Promise<any> {
    return Promise.resolve();
  }

}

export default Application;
