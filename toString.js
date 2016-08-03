'use strict';

var fn = require('lodash/toString');

module.exports = function toString() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
