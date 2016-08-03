'use strict';

var fn = require('lodash/iteratee');

module.exports = function iteratee() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
