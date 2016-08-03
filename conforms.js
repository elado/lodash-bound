'use strict';

var fn = require('lodash/conforms');

module.exports = function conforms() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
