'use strict';

var fn = require('lodash/indexOf');

module.exports = function indexOf() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
