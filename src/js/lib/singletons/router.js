var Router = require('../factories/Router');

var hashchange = require('../../adapters/router/hashchange');

var config = require('../../config/router');

// add adapters
Router.Adapter(hashchange);

module.exports = Router(config);