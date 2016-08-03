'use strict';

var fn = require('lodash/unionWith');

module.exports = function unionWith() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
