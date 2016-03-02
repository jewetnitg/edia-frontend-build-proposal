var bootstrap_1 = require('./config/bootstrap');
var app = {
    start: function () {
        return Promise.resolve(bootstrap_1["default"]());
    }
};
app.start();
exports["default"] = app;
//# sourceMappingURL=main.js.map