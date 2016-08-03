'use strict';

var fn = require('lodash/gt');

module.exports = function gt() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
