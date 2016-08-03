'use strict';

var fn = require('lodash/initial');

module.exports = function initial() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
