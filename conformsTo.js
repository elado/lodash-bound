'use strict';

var fn = require('lodash/conformsTo');

module.exports = function conformsTo() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
