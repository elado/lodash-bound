'use strict';

var fn = require('lodash/forOwnRight');

module.exports = function forOwnRight() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
