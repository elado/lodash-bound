'use strict';

var fn = require('lodash/startsWith');

module.exports = function startsWith() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
