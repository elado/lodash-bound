'use strict';

var fn = require('lodash/kebabCase');

module.exports = function kebabCase() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
