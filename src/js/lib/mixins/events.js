var events = require('events');

function eventsMixin(dst) {
  dst = dst || {};

  var emitter = new events.EventEmitter();
  var mixin = null;

  return mixin = Object.assign(dst, {

    on: function(event, callback) {
      emitter.on(event, callback);
    },

    once: function(event, callback) {
      function cb(data) {
        mixin.off(event, cb);
        callback(data);
      }

      mixin.on(event, cb);
    },

    trigger: function(event, data) {
      emitter.emit(event, data);
    },

    off: function(event, callback) {
      if (callback) {
        emitter.removeListener(event, callback);
      } else {
        emitter.removeAllListeners(event);
      }
    }

  });
}

module.exports = eventsMixin;