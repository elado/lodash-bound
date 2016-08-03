'use strict';

var fn = require('lodash/transform');

module.exports = function transform() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
