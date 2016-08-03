'use strict';

var fn = require('lodash/attempt');

module.exports = function attempt() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
