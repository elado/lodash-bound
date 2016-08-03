'use strict';

var fn = require('lodash/upperFirst');

module.exports = function upperFirst() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
