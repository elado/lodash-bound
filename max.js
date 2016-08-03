'use strict';

var fn = require('lodash/max');

module.exports = function max() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
