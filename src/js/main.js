var _ = require('lodash');
var routerConfig = require('./config/router');

/**
 *
 * @name superCoolApplication
 * @type Object
 */
var superCoolApplication = {
  thisIsTheOnlyThingICanDo: function (value) {
    console.log(routerConfig);
    return value;
  },
  someUntestedFunctionThatDoesTheExactSameThing: function (value) {
    console.log(routerConfig);
    return value;
  }
};

module.exports = superCoolApplication;