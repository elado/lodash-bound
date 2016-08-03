'use strict';

var fn = require('lodash/floor');

module.exports = function floor() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
