/// <reference path="../typings/main.d.ts" />

import main from '../src/js/main';
import {expect} from 'chai';

describe('some module', function () {

  describe('some feature', function () {

    it('should do whatever fuck it', function (done) {
      main.start();
      expect("TOPKEK").to.equal("TOPKEK");
      done();
    });

  });

});