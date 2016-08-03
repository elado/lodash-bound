'use strict';

var fn = require('lodash/matchesProperty');

module.exports = function matchesProperty() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
