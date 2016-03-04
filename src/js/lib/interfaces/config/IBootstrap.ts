/// <reference path="../../../../../typings/main.d.ts" />

import Application from '../../classes/Application.ts';

export interface IBootstrap {
  (app : Application): Promise<any>;
}

export default IBootstrap;