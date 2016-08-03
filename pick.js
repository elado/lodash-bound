'use strict';

var fn = require('lodash/pick');

module.exports = function pick() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
