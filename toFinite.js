'use strict';

var fn = require('lodash/toFinite');

module.exports = function toFinite() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
