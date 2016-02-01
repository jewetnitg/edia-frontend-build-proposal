var superCoolApplication = require('../src/js/main');

describe('some module', function () {

  describe('some feature', function () {

    it('should return whatever value is passed in', function (done) {
      var value = {};
      var returnValue = superCoolApplication.thisIsTheOnlyThingICanDo(value);

      expect(returnValue).to.equal(value);
      done();
    });

  });

});