'use strict';

var fn = require('lodash/camelCase');

module.exports = function camelCase() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
