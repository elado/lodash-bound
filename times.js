'use strict';

var fn = require('lodash/times');

module.exports = function times() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
