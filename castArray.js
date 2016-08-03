'use strict';

var fn = require('lodash/castArray');

module.exports = function castArray() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
