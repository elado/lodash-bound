'use strict';

var fn = require('lodash/now');

module.exports = function now() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
