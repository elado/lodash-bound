'use strict';

var fn = require('lodash/cond');

module.exports = function cond() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
