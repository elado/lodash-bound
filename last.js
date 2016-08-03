'use strict';

var fn = require('lodash/last');

module.exports = function last() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
