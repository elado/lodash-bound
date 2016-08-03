'use strict';

var fn = require('lodash/lt');

module.exports = function lt() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
