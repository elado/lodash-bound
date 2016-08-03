'use strict';

var fn = require('lodash/trim');

module.exports = function trim() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
