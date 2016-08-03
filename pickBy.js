'use strict';

var fn = require('lodash/pickBy');

module.exports = function pickBy() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
