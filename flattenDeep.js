'use strict';

var fn = require('lodash/flattenDeep');

module.exports = function flattenDeep() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
