'use strict';

var fn = require('lodash/eq');

module.exports = function eq() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
