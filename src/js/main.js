var es6_promise_1 = require('es6-promise');
var bootstrap_1 = require('./config/bootstrap');
var app = {
    start: function () {
        return bootstrap_1["default"]();
    },
    stop: function () {
        return es6_promise_1.Promise.resolve();
    }
};
app.start();
exports["default"] = app;
//# sourceMappingURL=main.js.map