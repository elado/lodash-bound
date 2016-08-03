'use strict';

var fn = require('lodash/toNumber');

module.exports = function toNumber() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
