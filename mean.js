'use strict';

var fn = require('lodash/mean');

module.exports = function mean() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
