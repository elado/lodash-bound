'use strict';

var fn = require('lodash/flatMapDepth');

module.exports = function flatMapDepth() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
