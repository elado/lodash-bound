'use strict';

var fn = require('lodash/endsWith');

module.exports = function endsWith() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
