'use strict';

var fn = require('lodash/entries');

module.exports = function entries() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
