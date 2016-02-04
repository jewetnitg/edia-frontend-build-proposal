var Rlite = require('rlite-router');
var eventsMixin = require('../mixins/events');

/**
 * The {@link Router} is used to tell the application what page to show.
 * The method of routing used can be switched easily by changing the adapter (see {@link Router#Adapter}.
 * Routes are handled by defining routes in the routes option, and listening for the route event.
 * The route event is passed an object containing the matched route, the value assigned to it, the parameters (splats & querystrings) and the matched url fragment
 *
 * @param options {Object} An object containing the properties listed below
 *
 * @property defaultRoute {String} The route the application should navigate to when none is specified
 * @property defaultRoute {String} The route the application should navigate to when none is specified
 * @property routes {Object<*>} The routes of the application, i.e. ```'/someRoute/:splat': {//anything}```
 *
 * @class
 * @example
 * var router = Router({
 *   adapter: 'hashchange', // see {@link Router#Adapter}
 *   routes: {
 *     '/some/:route': {
 *       // this could be anything truthy, an object, function, string etc.
 *     }
 *   }
 * });
 *
 * router.on('route', function(data) {
 *   data.route; // the route, '/someRoute/:splat' for example
 *   data.options; // refers to the value assigned to the route above
 *   data.url; // the url (fragment), '/someRoute/value' for example
 *   data.params; // the splats from the route and the query string values, /someRoute/value?splat2=3 {splat: 'value', splat2: 3}
 * });
 *
 * router.start({
 *   // more options for the router, same as passed in factory
 * });
 *
 *
 */
function Router (options) {
  options = options || {};
  var r = Rlite();

  var router    = null;
  var adapter   = null;

  function routeEventHandler () {
    var url = adapter.getUrl();

    if (!r.run(url)) {
      router.trigger('error', {
        code: 404,
        url: url
      });
    }
  }

  router = {

    options: options,

    /**
     * Starts the router
     * @param options {Object} options object, like passed into the constructor
     */
    start: function(options) {
      options = options || {};
      Object.assign(router.options, options);

      // add routes
      for (var route in router.options.routes) {
        if (router.options.routes.hasOwnProperty(route)) {
          router.addRoute(route, router.options.routes[route]);
        }
      }

      // get adapter
      if (typeof router.options.adapter === 'string') {
        adapter = Router.adapters[router.options.adapter];

        if (!adapter) {
          throw new Error('Can\'t construct Router, Adapter \'' + router.options.adapter + '\' is not defined.');
        }
      } else if (typeof router.options.adapter === 'object') {
        adapter = Router.Adapter(router.options.adapter);
      } else {
        throw new Error('Can\'t construct Router, no Adapter provided.');
      }

      adapter.start(routeEventHandler);

      // if we aren't on a page already, navigate to the default
      if (!adapter.getUrl() && router.options.defaultRoute) {
        this.redirect(router.options.defaultRoute);
      } else {
        // treat initial page as a route event
        routeEventHandler();
      }

      this.trigger('start');
    },

    /**
     * Stops the router
     */
    stop: function() {
      adapter.stop(routeEventHandler);
      this.trigger('stop');
    },

    /**
     * Adds one route
     * @param route {String}
     * @param options {*}
     */
    addRoute: function(route, options) {
      // remove leading slash
      route = route[0] === '/' ? route.substring(1) : route;
      r.add(route, function (data) {
        router.trigger('route', {
          route: route,
          options: options,
          url: data.url,
          params: data.params
        });
      });
    },

    /**
     * Navigates to a url fragment
     * @param urlFragment
     * @example
     * router.navigate('/user/3');
     */
    navigate: function(urlFragment) {
      adapter.navigate(urlFragment, options);
    },

    /**
     * Reloads the current route
     * @example
     * router.reload();
     */
    reload: function() {
      // act as though we just routed
      routeEventHandler();
    },

    /**
     * Redirects to a url fragment, replaces the current history item
     * @example
     * router.redirect('/home');
     */
    redirect: function(url) {
      adapter.replace(url, options);
    },

    /**
     * Makes a url fragment from a route and a data object
     * @param route {String}
     * @param data {Object}
     * @returns {String}
     * @example
     * router.makeUrl('/users/:id', {id: 3});
     * // returns '/users/3'
     */
    makeUrl: function(route, data) {
      var queryStrings = [];
      var url            = route;

      for (var i in data) {
        if (data.hasOwnProperty(i)) {
          var regex  = new RegExp(':' + i, 'g');
          var newUrl = url.replace(regex, data[i]);

          if (newUrl === url) {
            queryStrings.push(encodeURIComponent(i) + '=' + encodeURIComponent(data[i]));
          }

          url = newUrl;
        }
      }

      if (queryStrings.length) {
        route += '?' + queryStrings.join('&');
      }

      return route;
    }
  };

  eventsMixin(router);

  return router;
}

Router.adapters = {};

/**
 * Router Adapters serve to do the actual
 * @param options {Object} Object containing the properties listed below
 *
 * @property name {String}
 * @property start {Function}
 * @property stop {Function}
 * @property getUrl {Function}
 * @property replace {Function}
 * @property navigate {Function}
 * @property navigate {Function}
 * @returns {void|*}
 * @class
 * @example
 * function makeHashUrlFragment(url, options) {
 *   const hash = url[0] === '#' ? '' : '#';
 *   const bang = options.hashBang ? '!' : '';
 *
 *   return hash + bang + url;
 * }
 *
 * const hashchange = {
 *
 *   name: 'hashchange',
 *
 *   start: function(routeEventHandler) {
 *     window.addEventListener('hashchange', routeEventHandler);
 *   },
 *
 *   stop: function(routeEventHandler) {
 *     window.removeEventListener('hashchange', routeEventHandler);
 *   },
 *
 *   getUrl: function() {
 *     return (location.hash || '#').slice(1);
 *   },
 *
 *   replace: function(url, options) {
 *     location.replace(makeHashUrlFragment(url, options));
 *   },
 *
 *   navigate: function(url, options) {
 *     location.hash = makeHashUrlFragment(url, options);
 *   }
 *
 * };
 */
Router.Adapter = function RouterAdapter (options) {
  var baseErr = 'Router Adapter ' + (options.name ? '\'' + options.name + '\'' : '');
  var adapter = Object.assign({
    start: function() {
      throw new Error(baseErr + ' does not support starting.');
    },
    stop: function() {
      throw new Error(baseErr + ' does not support stopping.');
    },
    getUrl: function() {
      throw new Error(baseErr + ' does not support getting the current url.');
    },
    replace: function() {
      throw new Error(baseErr + ' does not support replacing the current history item.');
    },
    navigate: function() {
      throw new Error(baseErr + ' does not support navigating to a new history item.');
    },
    reload: function() {
      throw new Error(baseErr + ' does not support reloading the current history item.');
    }
  }, options);

  if (options.name) {
    if (Router.adapters[options.name]) {
      throw new Error('Can\'t construct ' + baseErr + ', Adapter already exists.');
    }

    Router.adapters[options.name] = adapter;
  }

  return adapter;
}

module.exports = Router;