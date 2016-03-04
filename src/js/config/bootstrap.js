var es6_promise_1 = require('es6-promise');
var bootstrap = function (app) {
    return new es6_promise_1.Promise(function (resolve, reject) {
        console.log('bootstrap!');
        resolve(undefined);
    });
};
exports.__esModule = true;
exports["default"] = bootstrap;
//# sourceMappingURL=bootstrap.js.map