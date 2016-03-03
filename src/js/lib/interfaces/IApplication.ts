/// <reference path="../../../../typings/main.d.ts" />

export interface IApplication {
  start() : Promise<any>;
  stop() : Promise<any>;
}

export default IApplication;
