'use strict';

var fn = require('lodash/range');

module.exports = function range() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
