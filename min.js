'use strict';

var fn = require('lodash/min');

module.exports = function min() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
