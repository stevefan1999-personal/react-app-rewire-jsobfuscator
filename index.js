const JavaScriptObfuscator = require('webpack-obfuscator')

function rewireJsObfuscator (config, env, obfuscatorOptions = null, excludes = []) {
  config.plugins = (config.plugins || []).concat(new JavaScriptObfuscator(obfuscatorOptions, excludes))
  return config
}

module.exports = rewireJsObfuscator