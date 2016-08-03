'use strict';

var fn = require('lodash/tap');

module.exports = function tap() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
