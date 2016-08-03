'use strict';

var fn = require('lodash/reduceRight');

module.exports = function reduceRight() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
