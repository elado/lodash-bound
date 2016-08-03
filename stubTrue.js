'use strict';

var fn = require('lodash/stubTrue');

module.exports = function stubTrue() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
