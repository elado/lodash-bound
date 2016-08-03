'use strict';

var fn = require('lodash/property');

module.exports = function property() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
