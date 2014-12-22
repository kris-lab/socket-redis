module.exports = (function() {

  function Plugin() {
  }

  Plugin.prototype.getHooks = function() {
    ['subscribe', 'unsubscribe', 'message', 'publish']
  }

  Plugin.prototype.trigger = function(hook, connection, data) {
    args = arguments.shift()
    switch(hook) {
      case 'subscribe': this.onSubscribe(args);
      case 'unsubscribe': this.onUnsubscribe(args);
      case 'message': this.onMessage(args);
      case 'publish': this.onPublish(args);
    }
  }

  Plugin.prototype.onSubscribe = function(connection) {
  }

  Plugin.prototype.onUnsubscribe = function(connection) {
  }

  Plugin.prototype.onMessage = function(connection, data) {
  }

  Plugin.prototype.onPublish = function(connection, data) {
  }

  return Plugin

})()
