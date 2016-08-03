'use strict';

var fn = require('lodash/flip');

module.exports = function flip() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
