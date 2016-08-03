'use strict';

var fn = require('lodash/stubArray');

module.exports = function stubArray() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
