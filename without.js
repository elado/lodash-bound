'use strict';

var fn = require('lodash/without');

module.exports = function without() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
