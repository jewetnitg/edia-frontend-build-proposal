/// <reference path="../typings/main.d.ts" />

import main from '../src/js/main';
import * as chai from 'chai';

describe('some module', function () {

  describe('some feature', function () {

    it('should do whatever fuck it', function (done : Function) {
      main.start();
      chai.expect('TOPKEK').to.equal('TOPKEK');
      done();
    });

  });

});