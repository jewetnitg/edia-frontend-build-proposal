var es6_promise_1 = require('es6-promise');
function bootstrap() {
    return new es6_promise_1.Promise(function (resolve, reject) {
        console.log('bootstrap!');
        resolve();
    });
}
exports.bootstrap = bootstrap;
;
exports.__esModule = true;
exports["default"] = bootstrap;
//# sourceMappingURL=bootstrap.js.map