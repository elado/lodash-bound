'use strict';

var fn = require('lodash/sampleSize');

module.exports = function sampleSize() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
