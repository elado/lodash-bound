'use strict';

var fn = require('lodash/meanBy');

module.exports = function meanBy() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
