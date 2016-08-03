'use strict';

var fn = require('lodash/some');

module.exports = function some() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
