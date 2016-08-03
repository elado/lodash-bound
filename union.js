'use strict';

var fn = require('lodash/union');

module.exports = function union() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
