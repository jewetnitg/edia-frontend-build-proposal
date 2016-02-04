function makeHashUrlFragment(url, options) {
  const hash = url[0] === '#' ? '' : '#';
  const bang = options.hashBang ? '!' : '';

  return hash + bang + url;
}

const hashchange = {

  name: 'hashchange',

  start: function(routeEventHandler) {
    window.addEventListener('hashchange', routeEventHandler);
  },

  stop: function(routeEventHandler) {
    window.removeEventListener('hashchange', routeEventHandler);
  },

  getUrl: function() {
    return (location.hash || '#').slice(1);
  },

  replace: function(url, options) {
    location.replace(makeHashUrlFragment(url, options));
    // @todo use this when we have a server
    //history.replaceState(undefined, "", makeHashUrlFragment(url, options));
  },

  navigate: function(url, options) {
    location.hash = makeHashUrlFragment(url, options);
  }

};

module.exports = hashchange;