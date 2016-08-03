'use strict';

var fn = require('lodash/forOwn');

module.exports = function forOwn() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
