var es6_promise_1 = require('es6-promise');
var bootstrap_1 = require('../../config/bootstrap');
var Application = (function () {
    function Application() {
    }
    Application.prototype.start = function () {
        return bootstrap_1["default"]();
    };
    Application.prototype.stop = function () {
        return es6_promise_1.Promise.resolve();
    };
    return Application;
})();
exports.Application = Application;
exports.__esModule = true;
exports["default"] = Application;
//# sourceMappingURL=Application.js.map