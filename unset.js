'use strict';

var fn = require('lodash/unset');

module.exports = function unset() {
  return fn.apply(undefined, [this].concat(Array.prototype.slice.apply(arguments)));
};
