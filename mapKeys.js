'use strict';

var fn = require('lodash/mapKeys');

module.exports = function mapKeys() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
