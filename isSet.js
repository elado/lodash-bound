'use strict';

var fn = require('lodash/isSet');

module.exports = function isSet() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
