'use strict';

var fn = require('lodash/mapValues');

module.exports = function mapValues() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
