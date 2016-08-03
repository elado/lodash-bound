'use strict';

var fn = require('lodash/noop');

module.exports = function noop() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
