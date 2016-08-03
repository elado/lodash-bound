'use strict';

var fn = require('lodash/extend');

module.exports = function extend() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
