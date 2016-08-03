'use strict';

var fn = require('lodash/sumBy');

module.exports = function sumBy() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
