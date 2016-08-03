'use strict';

var fn = require('lodash/flatten');

module.exports = function flatten() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
