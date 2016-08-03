'use strict';

var fn = require('lodash/minBy');

module.exports = function minBy() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
