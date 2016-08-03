'use strict';

var fn = require('lodash/spread');

module.exports = function spread() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
