'use strict';

var fn = require('lodash/isMatchWith');

module.exports = function isMatchWith() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
