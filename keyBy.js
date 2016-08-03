'use strict';

var fn = require('lodash/keyBy');

module.exports = function keyBy() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
