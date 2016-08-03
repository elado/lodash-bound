'use strict';

var fn = require('lodash/pull');

module.exports = function pull() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
