# react-app-rewire-jsobfuscator
Rewire CRA to use JSObfuscator though injecting [`webpack-obfuscator`](https://github.com/javascript-obfuscator/webpack-obfuscator) into Webpack config

[`react-app-rewired`](https://github.com/timarney/react-app-rewired) required

# Usage

```js
const rewireJsObfuscator = require('react-app-rewire-jsobfuscator')

module.exports = function override(config, env) {
  const options = {}
  const exclude = []
  config = rewireJsObfuscator(config, env, options, exclude);
  ...
  
  return config;
}

```
