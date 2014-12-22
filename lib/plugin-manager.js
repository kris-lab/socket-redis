module.exports = (function() {

  var plugins = {}

  var HOOKS = ['subscribe', 'unsubscribe', 'message', 'publish']

  function PluginManager() {
  }

  PluginManager.prototype.register = function(plugin) {
    plugin.getHooks().forEach(function(hook) {
      plugins[hook].push(plugin)
    });
  }

  PluginManager.prototype.trigger = function(hook, connection, data) {
    plugins[hook].forEach(function(plugin) {
      if (_.isFunction(plugin.call)) {
        plugin.trigger(hook, connection, data)
      }
    });
  }

  return PluginManager;

})()
