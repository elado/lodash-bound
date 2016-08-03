'use strict';

var fn = require('lodash/isFinite');

module.exports = function isFinite() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
